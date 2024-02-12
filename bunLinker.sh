#!/bin/bash

for package in packages/*; do
	echo "[...] Linking $package to bun"
	cd $package
	# the package is "dir/packagedir", so the package_name is "@local/packagedir" as I like to keep the package name like that
	package_name=$(echo $package | cut -d'/' -f2)
	bun link "@local/$package_name"
	cd ../..
	echo "[+] Done linking $package to bun"
done