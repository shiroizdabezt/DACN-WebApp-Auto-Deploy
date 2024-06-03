# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY ./frontend/package.json .
RUN npm install
COPY ./frontend .
CMD ["npm", "start"]
EXPOSE 3000