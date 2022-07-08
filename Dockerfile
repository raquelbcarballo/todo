FROM node:16.8.0

WORKDIR /app

COPY server/package*.json ./
RUN npm install

COPY server/. .

EXPOSE 3000
CMD npm run migrate; npm start