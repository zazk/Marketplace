# Build production ready marketplace-www
FROM node:10-alpine as build-deps

WORKDIR /usr/src/pachama/marketplace/www/
COPY www/package.json www/yarn.lock ./
RUN yarn install
COPY www/ ./
RUN yarn build


# Run server
FROM node:10-alpine

WORKDIR /usr/src/pachama/marketplace/
COPY --from=build-deps /usr/src/pachama/marketplace/www/build/ ./www/build/

WORKDIR /usr/src/pachama/marketplace/api/
COPY api/package.json api/yarn.lock ./
RUN yarn install
COPY api/ ./

CMD ["yarn", "start"]
