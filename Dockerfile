FROM node:alpine

WORKDIR /deckup-client

COPY package.json .

RUN npm install

COPY . .

RUN npm run build