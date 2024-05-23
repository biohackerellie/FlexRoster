#!/usr/bin/env bash

set -e

clear

gum style --border normal --margin "1" --padding "1 2" --border-foreground 212 "$(gum style --foreground 212 ' ________  __                      _______                         __                         
/        |/  |                    /       \                       /  |                        
$$$$$$$$/ $$ |  ______   __    __ $$$$$$$  |  ______    _______  _$$ |_     ______    ______  
$$ |__    $$ | /      \ /  \  /  |$$ |__$$ | /      \  /       |/ $$   |   /      \  /      \ 
$$    |   $$ |/$$$$$$  |$$  \/$$/ $$    $$< /$$$$$$  |/$$$$$$$/ $$$$$$/   /$$$$$$  |/$$$$$$  |
$$$$$/    $$ |$$    $$ | $$  $$<  $$$$$$$  |$$ |  $$ |$$      \   $$ | __ $$    $$ |$$ |  $$/ 
$$ |      $$ |$$$$$$$$/  /$$$$  \ $$ |  $$ |$$ \__$$ | $$$$$$  |  $$ |/  |$$$$$$$$/ $$ |      
$$ |      $$ |$$       |/$$/ $$  |$$ |  $$ |$$    $$/ /     $$/   $$  $$/ $$       |$$ |      
$$/       $$/  $$$$$$$/ $$/   $$/ $$/   $$/  $$$$$$/  $$$$$$$/     $$$$/   $$$$$$$/ $$/       
`')"

gum spin --title "Checking for updates..." -- sleep 1
echo "Checking for updates..."
if ! git diff --quiet HEAD @{u}; then
	echo "Changes detected, updating and deploying"
	git pull
	# bash ./scripts/deploy.sh
else
	echo "No changes detected"
fi

sleep 2

gum style --foreground 212 "Building Docker image..."

docker-compose -f docker-build.yml build
clear
gum spin --show-output --spinner monkey --title "Building..." --title.foreground 99 -- sh -c 'sleep 1; echo "Done! 🎉"'

sleep 2

gum style --foreground 212 "Pushing Docker image..."
docker stack deploy -c docker-compose.yml FlexRoster -d
gum spin --show-output --spinner monkey --title "Wrapping up..." --title.foreground 99 -- sh -c 'sleep 1; echo "K bye, loser 😒"'
