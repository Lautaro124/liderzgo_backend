#!/bin/bash

# Levantar el contenedor de Docker con WSL
docker-compose -f docker-compose.dev.yml up -d
pnpm dev