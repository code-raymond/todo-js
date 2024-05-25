FROM node:16-alpine

WORKDIR /usr/src/app

RUN npm -g install typescript

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV PORT=8000

EXPOSE ${PORT}

CMD ["node","dist/app.js"]