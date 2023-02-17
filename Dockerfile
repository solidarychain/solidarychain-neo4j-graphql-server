FROM node:14-alpine

# update packages
RUN apk update

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package*.json ./
# copy build file
COPY build.js ./
# copy source code to /app/src folder
COPY src /app/src

# install dependencies
RUN npm i npm@latest --global
# RUN npm ci
RUN npm i
# build
RUN npm run build
RUN rm src -r

USER node

EXPOSE 5000

CMD [ "dockerize", "-wait", "tcp://neo4j:7687", "-timeout", "300s", "-wait-retry-interval", "30s", "node", "./dist/main.js" ]
