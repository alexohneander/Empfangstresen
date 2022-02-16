# Empfangstresen
Empfangstresen is a Service Registry for cloud-based microservices.

## Status

| Category         | Status                                                                                                    |
| ---------------- | --------------------------------------------------------------------------------------------------------- |
| Version          | [![Docker](https://img.shields.io/docker/v/alexohneander/empfangstresen)](https://hub.docker.com/repository/docker/alexohneander/empfangstresen)           |
| License          | ![GitHub](https://img.shields.io/github/license/alexohneander/Empfangstresen)                             |

## Quick start

```bash
docker run --name redis -p 6379:6379 -d redis
```

```bash
docker run -p 27017:27017 --name mongo -d mongo
```

```bash
docker run -p 3000:3000 alexohneander/empfangstresen
```