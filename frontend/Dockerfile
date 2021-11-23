FROM node:alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . /app

ENV NODE_ENV production

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]