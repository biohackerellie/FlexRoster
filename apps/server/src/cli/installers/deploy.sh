#!/bin/bash

WORKDIR="../../../../../"

handle_error() {
	echo "Error on line $1"
	exit 1
}

trap 'handle_error $LINENO' ERR

cd $WORKDIR
pwd

# docker compose -f docker-build.yml build

# docker compose -f docker-build.yml push

# docker stack deploy -c docker-compose.yml FlexRoster -d
