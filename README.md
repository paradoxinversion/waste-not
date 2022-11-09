# Waste Not

__An application to reduce food waste and inventory your kitchen__

## Prerequisites
- Node.js 16+
- MongoDB
- Docker

## Run the Application

### Via NPM

1. Run the MongoDB Instance (see below)

To run the application with MongoDB, from the root directory, run

```sh
docker compose up
```

## Run the MongoDB instance

```
docker run --name mongodb -d -p 27017:27017 mongo
```

## Stop the application

To stop all running images, from the root directory, run

```sh
docker compose down
```

You can also end the process via `cmd-Z` or `ctrl-Z` depending on your environment.

## Build Docker Image

Docker images should be built from the live repository.

```
docker build https://github.com/paradoxinversion/waste-not.git\#v<TAG> -t paradoxinversion/waste-not:v<TAG>
```

> Replace \<TAG> with the version of the application you wish to build.