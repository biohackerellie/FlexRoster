#!/bin/bash

docker compose -f docker-build.yml build

docker compose -f docker-build.yml push

docker stack deploy -c docker-compose.yml FlexRoster -d
