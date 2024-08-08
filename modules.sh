
#!/bin/bash

# Set the root directory of your workspace
ROOT_DIR="."

# Find all go.mod files in the workspace
go_mod_files=$(find $ROOT_DIR -name "go.mod")

# Initialize an empty array to store module directories
modules=()

# Loop through each go.mod file and get the module directory
for mod_file in $go_mod_files; do
  mod_dir=$(dirname $mod_file)
  module=$(cd $mod_dir && go list -m -json | jq -s '.' | jq -c '[.[].Dir]')
  modules+=($module)
done

# Print the modules as a JSON array
echo ${modules[@]} 
