FROM node:20.11.1-alpine3.18
 
WORKDIR /usr/src/app
 

COPY package*.json ./
 

RUN npm cache clean --force

RUN npm install
 
COPY . .

RUN npm run build


CMD [ "npm", "run", "start" ]
