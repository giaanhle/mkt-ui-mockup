FROM node:20-slim

WORKDIR /app

COPY package.json .
RUN npm install --omit=dev

COPY server.js db.js schema.sql ./
COPY views ./views

ENV PORT=3000
EXPOSE 3000

CMD ["node", "server.js"]
