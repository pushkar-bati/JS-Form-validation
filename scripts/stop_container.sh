#!/bin/bash
# Stop and remove the existing container if running
docker stop portfolio || true
docker rm portfolio || true