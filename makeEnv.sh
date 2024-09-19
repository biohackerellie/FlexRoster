#!/bin/bash

# Check if a YAML file is provided
if [ -z "$1" ]; then
  echo "Usage: $0 config.yaml"
  exit 1
fi

yaml_file="$1"
env_file=".env"

# Remove existing .env file if it exists
rm -f "$env_file"

# Read the YAML file line by line
while IFS= read -r line; do
  # Skip empty lines and comments
  if [[ -z "$line" || "$line" =~ ^# ]]; then
    continue
  fi

  # Handle key-value pairs
  if [[ "$line" =~ ^([a-zA-Z0-9_]+):\ (.*) ]]; then
    key="${BASH_REMATCH[1]^^}"
    value="${BASH_REMATCH[2]}"
    
    # Remove quotes from value if present
    value="${value%\"}"
    value="${value#\"}"
    
    # Handle lists
    if [[ "$value" == "|" ]]; then
      # Initialize an empty array to hold list items
      declare -a list_items=()
      while IFS= read -r list_line; do
        # Check for the end of the list
        if [[ -z "$list_line" || ! "$list_line" =~ ^[[:space:]]+-\ (.*) ]]; then
          break
        fi
        item="${BASH_REMATCH[1]^^}"
        list_items+=("$item")
      done
      # Join list items with commas
      value=$(IFS=,; echo "${list_items[*]}")
    fi

    # Write to .env file
    echo "${key}=${value}" >> "$env_file"
  fi
done < "$yaml_file"

echo "Converted $yaml_file to $env_file"
