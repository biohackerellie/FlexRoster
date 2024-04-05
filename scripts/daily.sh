#!/bin/bash

LOGFILE=/var/log/FlexRoster/daily.log

set -euo pipefail


cd /apps/FlexRoster >> $LOGFILE 2>&1

echo "Starting FlexRoster update" >> $LOGFILE 2>&1
git fetch >> $LOGFILE 2>&1

if ! git diff --quiet HEAD @{u}; then
		echo "Changes detected, updating and deploying" >> $LOGFILE 2>&1
		git pull >> $LOGFILE 2>&1
		bash ./scripts/deploy.sh >> $LOGFILE 2>&1
else
		echo "No changes detected" >> $LOGFILE 2>&1
fi

echo "Running nightly Bun scripts" >> $LOGFILE 2>&1

cd ./apps/server
/home/ellie/.bun/bin/bun --env-file=../../.env run ./src/scripts/nightly.ts >> $LOGFILE 2>&1

