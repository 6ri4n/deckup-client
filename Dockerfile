FROM node:18-alpine3.18

WORKDIR /deckup-client

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5173

RUN npm run build
