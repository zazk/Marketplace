FROM node:10-alpine

WORKDIR /usr/src/pachama/marketplace

#ENV PATH /usr/src/pachama/marketplace/node_modules/.bin:/usr/src/pachama/node_modules/.bin:$PATH
ENV NODE_PATH /usr/src/pachama/marketplace/node_modules:/usr/local
#ENV APP_PATH /usr/src/pachama/marketplace

COPY package.json yarn.lock ./
RUN yarn install
COPY . .

EXPOSE 3001

CMD ["yarn", "run", "start"]
