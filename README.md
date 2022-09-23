# Waste Not

__An application to reduce food waste and inventory your kitchen__

## Prerequisites
- Node.js 16+
- MongoDB
- Docker

## Run the Application

To run the application with MongoDB, from the root directory, run

```sh
docker compose up
```

## Stop the application

To stop all running images, from the root directory, run

```sh
docker compose down
```

docker run --name mongodb -d -p 27017:27017 mongo
