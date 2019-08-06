# Build production ready marketplace-www
FROM node:10-alpine as build-deps

WORKDIR /usr/src/pachama/marketplace-www
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build


# Run server
FROM node:10-alpine

WORKDIR /usr/src/pachama/
COPY --from=build-deps /usr/src/pachama/marketplace-www/build/ ./marketplace-www/build/

WORKDIR /usr/src/pachama/api/
COPY package.json yarn.lock ./
RUN yarn
COPY . ./

CMD ["yarn", "start"]
