FROM node:18.18.0-alpine as dependencies

WORKDIR /journal

COPY .yarn ./.yarn
COPY .pnp.cjs .yarnrc.yml package.json yarn.lock* ./
RUN yarn install --immutable

FROM node:18.18.0-alpine as runner
WORKDIR /journal

COPY --from=dependencies /journal/.yarn ./.yarn
COPY --from=dependencies /journal/.pnp.cjs ./pnp.cjs
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

RUN yarn build

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001


ARG no_robots
RUN if [ "${no_robots}" = "true" ] ; then mv ./dev_robots.txt ./public/robots.txt ; else echo robots.txt allowed ; fi

ENV PORT 3000

EXPOSE $PORT


CMD ["yarn", "start"]
