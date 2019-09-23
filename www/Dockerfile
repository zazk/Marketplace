FROM node:10-alpine

WORKDIR /usr/src/pachama/marketplace

COPY package.json yarn.lock ./
RUN yarn install
COPY . .

EXPOSE 3000

CMD ['yarn', 'run', 'start']
