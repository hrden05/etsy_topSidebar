FROM node:12.7.0-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package*.json ./

RUN npm install --verbose

EXPOSE 3000

CMD [ "npm", "start" ]
