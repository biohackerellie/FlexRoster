#!/bin/bash

git fetch

if ! git diff --quiet HEAD @{u}; then
	echo "Changes detected, updating and deploying"
	git pull
	bash ./scripts/deploy.sh
else
	echo "No changes detected"
fi
