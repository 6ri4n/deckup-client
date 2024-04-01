FROM node:16-alpine3.17

WORKDIR /deckup-client

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build