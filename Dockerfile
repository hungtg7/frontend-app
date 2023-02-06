FROM node:16-slim

WORKDIR /src

COPY . .

RUN npm install

CMD npm start
