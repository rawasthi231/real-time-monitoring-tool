const express = require("express");
const WebSocket = require("ws");
const { Kafka } = require("kafkajs");

const app = express();
const port = 5000;

// Create Kafka consumer
const kafka = new Kafka({ brokers: ["localhost:9092"] });
const consumer = kafka.consumer({ groupId: "sports-group" });

// Set up WebSocket server
const server = app.listen(port, () =>
  console.log(`Backend API listening on port ${port}`)
);
const wss = new WebSocket.Server({ server });

let clients = [];

wss.on("connection", (ws) => {
  clients.push(ws);
  console.log("New WebSocket connection");

  ws.on("close", () => {
    clients = clients.filter((client) => client !== ws);
  });
});

// Consume Kafka messages and send to WebSocket clients
const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "sports-scores", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const event = JSON.parse(message.value.toString());
      console.log(`Consumed event: ${JSON.stringify(event)}`);

      // Broadcast to WebSocket clients
      clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(event));
        }
      });
    },
  });
};

run().catch(console.error);
