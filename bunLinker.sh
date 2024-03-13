#!/bin/bash

for package in packages/*; do
	echo "[...] Linking $package to bun"
	cd $package

	package_name=$(echo $package | cut -d'/' -f2)
	bun link "@local/$package_name"
	cd ../..
	echo "[+] Done linking $package to bun"
done