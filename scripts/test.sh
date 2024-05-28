#!/usr/bin/env bash

set -e

# Function to check if gum is installed
check_gum_installed() {
  if command -v gum &>/dev/null; then
    echo "gum is already installed."
    return 0
  else
    echo "gum is not installed."
    return 1
  fi
}

# Function to get the latest release URL from GitHub
get_latest_gum_release_url() {

  DOWNLOAD_URL="https://github.com/charmbracelet/gum/releases/download/v0.14.1/gum-0.14.1.tar.gz"

  if [ -z "$DOWNLOAD_URL" ]; then
    echo "Failed to get the latest release URL. Please check the GitHub repository and try again."
    exit 1
  fi

  echo $DOWNLOAD_URL
}

# Function to download and install gum
install_gum() {
  echo "Fetching the latest release URL..."
  GUM_URL=$(get_latest_gum_release_url)

  echo "Downloading gum from $GUM_URL..."
  wget -q $GUM_URL -O /tmp/gum_latest.tar.gz
  if [ $? -ne 0 ]; then
    echo "Failed to download gum. Please check the URL and try again."
    exit 1
  fi

  echo "Extracting gum..."
  tar -xf /tmp/gum_latest.tar.gz -C /usr/local/bin/
  if [ $? -ne 0 ]; then
    echo "Failed to extract gum. Please check the tar file and try again."
    exit 1
  fi

  echo "gum has been successfully installed."
}

check_gum_installed
if [ $? -ne 0 ]; then
  install_gum
fi

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
