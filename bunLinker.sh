#!/bin/bash

for package in packages/*; do
	echo "Linking $package to bun"
	cd $package
	package_name=$(echo $package | cut -d'/' -f2)
	bun link $package_name
	cd ../..
	echo "Linked $package to bun"

done