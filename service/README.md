# Service

## Start Kafka broker

- Start docker desktop
- Run `docker compose up -d` to run kafka broker and zookeeper


## Produce Kafka events 
- Create virtual environment by running `python -m venv .venv`
- Activate the virtual environment:
    - Windows: `.venv/Scripts/activate`
    - Linux: `source .venv/bin/activate`
- Install dependencies by running `pip install -r requirements.txt`
- Start service using `python producer.py`