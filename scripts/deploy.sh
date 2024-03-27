#!/bin/bash

cd ../
turbo build --filter=server...

docker compose -f docker-build.yml build
docker compose -f docker-build.yml push



