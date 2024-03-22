#!/bin/bash

echo "running weekly cleanup script"
backup_dir="/tmp/docker_volumes_backup"
backup_filename="docker_volumes_$(date +%Y-%m-%d_%H-%M-%S).tar.gz"
remote_backup_location=""


# Backup before cleanup (example)
echo "Backing up important volumes..."
if [ ! -d "$backup_dir" ]; then
    mkdir -p "$backup_dir"
    echo "Created backup directory $backup_dir"
else
    echo "Backup directory $backup_dir already exists"
fi

# Backup each Docker volume
for volume in $(docker volume ls -q); do
    docker run --rm -v $volume:/from alpine tar czf /from/$volume.tar.gz -C /from ./
    mv /var/lib/docker/volumes/$volume/_data/$volume.tar.gz $backup_dir/
done

# Zip all backups into one file and remove the individual backups
tar czf "$backup_dir/$backup_filename" -C "$backup_dir" .
rm -rf $backup_dir/*tar.gz

# Transfer backup to remote server
rsync -avz $backup_dir/$backup_filename $remote_backup_location/

# Cleanup local backup files
rm -rf "$backup_dir"

echo "Backup and transfer completed"

# Check if Docker is running and clean up if it is
if [ $(docker info >/dev/null 2>&1; echo $?) -eq 0 ]; then
    echo "cleaning up docker"
    docker volume ls -qf dangling=true | xargs -r docker volume rm
    docker ps -qa --no-trunc --filter "status=exited" | xargs -r docker rm
    docker image prune -f
    docker system prune -f
else
    echo "Docker is not running"
fi

# System update with error handling
echo "updating the system"
if apt-get update -y && apt-get upgrade -y; then
    echo "System updated successfully"
else
    echo "System update failed"
    exit 1
fi
apt-get clean
apt-get autoremove -y

# Notify and reboot
echo "System will reboot in 5 minutes..."
shutdown -r +5
