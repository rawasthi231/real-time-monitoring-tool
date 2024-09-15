# microservice/producer.py

import json
import time
from kafka import KafkaProducer

producer = KafkaProducer(
    bootstrap_servers="localhost:9092",
    value_serializer=lambda v: json.dumps(v).encode("utf-8"),
)

teams = ["Team A", "Team B"]
score = {team: 0 for team in teams}


def produce_score_update():
    while True:
        # Simulate score update
        score[teams[0]] += 1
        score[teams[1]] += 2

        event = {"event_type": "score_update", "data": score}

        producer.send("sports-scores", event)
        print(f"Produced: {event}")
        time.sleep(5)


if __name__ == "__main__":
    produce_score_update()
