# Build production ready marketplace-www
FROM node:10-alpine as build-deps
WORKDIR /usr/src/pachama/marketplace-www
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
CMD ["npm", "run", "start"]
