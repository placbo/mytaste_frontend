#!/bin/bash

# Exit immediately if any command fails
set -e

echo "Starting deployment process..."

echo "removing package-lock.json and pulling from github"
rm -f package-lock.json # Remove lockfile on private network
git pull

# Install dependencies
echo "Installing dependencies (TURN OFF VPN???)..."
npm install --verbose

# Build the React application
echo "Buildinng application..."
npm run build

# Create destination directory if it doesn't exist
echo "Preparing destination directory..."
sudo mkdir -p /var/www/html/mytaste
# Copy build files to the destination
echo "Copying build files to server directory..."
sudo cp -r ./dist/* /var/www/html/mytaste/

# Set proper permissions
echo "Setting permissions..."
sudo chown -R www-data:www-data /var/www/html/mytaste
sudo chmod -R 755 /var/www/html/mytaste

echo "Deployment completed successfully!"