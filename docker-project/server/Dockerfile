FROM node:21-alpine3.18
WORKDIR /app

# COPY src src
COPY package*.json .

RUN npm install

CMD [ "npm", "run", "dev" ]