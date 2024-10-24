#!/bin/bash

# Function to handle cleanup and exit
cleanup() {
  echo "Operation cancelled."
  exit 1
}

# Trap the SIGINT signal (Ctrl + C)
trap cleanup SIGINT

# Get the type of change
TYPE=$(gum choose "fix" "feat" "docs" "style" "refactor" "bump" "chore" "revert")

# Get the summary and description for the commit
SUMMARY=$(gum input --value "$TYPE: " --placeholder "Summary of this change")
DESCRIPTION=$(gum write --placeholder "Details of this change")

# Confirm the commit
if ! gum confirm "Commit changes?"; then
  cleanup
fi

# Get the type of version bump
VERSION_TYPE=$(gum choose "major" "minor" "patch")

# Get the latest tag
LATEST_TAG=$(git describe --tags $(git rev-list --tags --max-count=1))
LATEST_TAG=${LATEST_TAG:-v0.0.0} # Default to v0.0.0 if no tags are found

# Extract the major, minor, and patch numbers
IFS='.' read -r -a VERSION_PARTS <<<"${LATEST_TAG//v/}"

MAJOR=${VERSION_PARTS[0]}
MINOR=${VERSION_PARTS[1]}
PATCH=${VERSION_PARTS[2]}

# Increment the version numbers based on the chosen version type
case $VERSION_TYPE in
major)
  MAJOR=$((MAJOR + 1))
  MINOR=0
  PATCH=0
  ;;
minor)
  MINOR=$((MINOR + 1))
  PATCH=0
  ;;
patch)
  PATCH=$((PATCH + 1))
  ;;
esac

# Create the new tag
NEW_TAG="v$MAJOR.$MINOR.$PATCH"
TAG=true
# Confirm the new tag
if ! gum confirm "Tag this commit as $NEW_TAG?"; then
  TAG=false
fi



git add -A
git commit -m "$SUMMARY" -m "$DESCRIPTION"

git push origin HEAD


if gum confirm "Merge dev into canary and tag the commit in canary?"; then
  git checkout canary
  git pull --rebase
  git merge develop
  MERGE_COMMIT=$(git rev-parse HEAD) # Get the merge commit hash
  if [ "$TAG" = true ]; then
    git tag -a "$NEW_TAG" "$MERGE_COMMIT" -m "Tagging $NEW_TAG in canary"
    git push origin canary --tags
  else
    git push origin canary
  fi
  git checkout develop
fi

if gum confirm "Release to production?"; then
  git checkout release
  git pull --rebase
  git merge canary
  MERGE_2_COMMIT=$(git rev-parse HEAD) # Get the merge commit hash
  if [ "$TAG" = true ]; then
    git tag -a "$NEW_TAG" "$MERGE_2_COMMIT" -m "Tagging $NEW_TAG in production"
    git push origin release --tags
  else
    git push origin release
  fi
  git checkout develop
fi
