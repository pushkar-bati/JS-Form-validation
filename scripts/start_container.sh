#!/bin/bash
# Log in to ECR and run the new container
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 047754151574.dkr.ecr.ap-south-1.amazonaws.com

# Pull the latest image
docker pull 047754151574.dkr.ecr.ap-south-1.amazonaws.com/portfolio:latest

# Run the container on port 80
docker run -d --name portfolio -p 80:80 --restart always 047754151574.dkr.ecr.ap-south-1.amazonaws.com/portfolio:latest