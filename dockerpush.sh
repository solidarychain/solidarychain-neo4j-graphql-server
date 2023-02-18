#!/bin/bash

# [[ $EUID -ne 0 ]] && echo "This script must be run as root." && exit 1

# declare common vars
DOCKER_REGISTRY_URL="hub.dockerhub.com"
DOMAIN_PROJECT_NAME="solidary-chain/solidary-chain-graph-ql-server"

if [ -z "${1}" ] || [ -z "${2}" ]; then
  echo "missing require paramameters 'docker-image-name' and 'docker-image-version'"
  echo "ex '${0} ${DOMAIN_PROJECT_NAME} 1.0.0'"
  exit 0
else
  # store in var, to be consistence with other scripts var names
  DOCKER_IMAGE_NAME="${1}"
  DOCKER_IMAGE_VERSION="${2}"

  echo "Enter ${DOCKER_REGISTRY_URL} Credentials"
  docker login ${DOCKER_REGISTRY_URL}
  read -n 1 -s -r -p "Press any key to continue";printf "\n"

  docker tag "${DOCKER_IMAGE_NAME}:latest" "${DOCKER_REGISTRY_URL}/${DOCKER_IMAGE_NAME}:latest"
  echo "push : [${DOCKER_REGISTRY_URL}/${DOCKER_IMAGE_NAME}:latest]"
  # docker push "${DOCKER_REGISTRY_URL}/${DOCKER_IMAGE_NAME}:latest"
  read -n 1 -s -r -p "Press any key to continue";printf "\n"

  docker tag "${DOCKER_IMAGE_NAME}:latest" "${DOCKER_REGISTRY_URL}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_VERSION}"
  echo "push : [${DOCKER_REGISTRY_URL}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_VERSION}]"
  # docker push "${DOCKER_REGISTRY_URL}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_VERSION}"
  read -n 1 -s -r -p "Press any key to continue";printf "\n"
fi
