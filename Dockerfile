FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# RUN npm ci --only=production

COPY . .

EXPOSE 3333

CMD [ "node", "src/index.js" ]