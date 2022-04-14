FROM node:17.8.0 as production

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY . .

RUN yarn prebuild
RUN yarn build

RUN cp .env.example .env

CMD ['yarn', 'start']
