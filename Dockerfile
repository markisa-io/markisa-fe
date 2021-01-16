FROM node:14.5.0-alpine3.10 AS Builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run prod

# Stage 2
FROM node:14.5.0-alpine3.10

WORKDIR /usr/src/app

COPY --from=Builder /usr/src/app/dist/markisa-fe  /usr/src/app/markisa-fe

COPY server /usr/src/app

RUN npm install

CMD ["node", "server.js"]
