#!/bin/bash

cleanup() {
  echo "Operation cancelled."
  exit 1
}

trap cleanup SIGINT

TYPE=$(gum choose "fix" "feat" "docs" "style" "refactor" "test" "chore" "revert")

SUMMARY=$(gum input --value "$TYPE: " --placeholder "Summary of this change")
DESCRIPTION=$(gum write --placeholder "Details of this change")
if gum confirm "Commit changes?"; then
  git add -A && git commit -m "$SUMMARY" -m "$DESCRIPTION"
else
  cleanup
fi

LATEST_TAG=$(git describe --tags $(git rev-list --tags --max-count=1))
LATEST_TAG=${LATEST_TAG:-v0.0.0}

VERSION_TYPE=$(gum choose "major" "minor" "patch")
IFS='.' read -r -a VERSION_PARTS <<<"${LATEST_TAG//v/}"

MAJOR=${VERSION_PARTS[0]}
MINOR=${VERSION_PARTS[1]}
PATCH=${VERSION_PARTS[2]}

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

# Confirm the new tag
if gum confirm "Tag this commit as $NEW_TAG?"; then
  git tag "$NEW_TAG"
  git push origin "$NEW_TAG"
else
  cleanup
fi
