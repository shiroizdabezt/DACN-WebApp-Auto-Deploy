# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY ./backend/package.json .
RUN npm install
COPY . .
CMD ["node", "index.js"]
EXPOSE 4000