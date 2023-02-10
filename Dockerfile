FROM node:16-slim

WORKDIR /src

COPY . .

RUN npm i

CMD npm start
