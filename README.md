# real-time-monitoring-tool

### A real time monitoring tool.

## backend
#### An Express.js backend application which acts as a WebSockets server and Kafka consumer. It consumes the Kafka events received from the Python service (Kafka producer) and send those events to the WebSocket clients.

- .gitignore
- Dockerfile
- index.js
- packege.json
- packege-lock.json
- README.md

## frontend
####  A ReactJS + Vite application which uses WebSocket to listen to the score messages sent from the backend server and show the live statistics on the UI.

- public
  - vite.svg
- src
  - .gitignore
  - Dockerfile
  - eslint.config.js
  - index.html
  - package-lock.json
  - package.json
  - README.md
  - tsconfig.app.json
  - tsconfig.json
  - tsconfig.node.json
  - vite.config.json

## service
####  A Python service which continuously produces data and send to Kafka topic using Kafka producer.

- .gitignore
- docker-compose.yml
- Dockerfile
- producer.py
- README.md
- requirements.txt

## docker-compose.yml
#### A docker compose file to run complete application as a docker container.

- Run `docker-compose up --build` to run the application as a docker container.

