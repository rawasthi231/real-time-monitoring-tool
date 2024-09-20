import json

from kafka import KafkaProducer

producer = KafkaProducer(
    bootstrap_servers="localhost:9092",
    value_serializer=lambda v: json.dumps(v).encode("utf-8"),
)


def produce_data(topic, data):
    print(f"Producing data: {data}")
    producer.send(topic, value=data)
    producer.flush()
