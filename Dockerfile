FROM node:16.15.0-alpine as dependencies

WORKDIR /journal
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:16.15.0-alpine as builder
WORKDIR /journal

COPY . .
COPY --from=dependencies /journal/node_modules ./node_modules
RUN yarn build

FROM node:16.15.0-alpine as runner
WORKDIR /journal

# -> from proccess .env.development, env.production
ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /journal/next.config.js ./
COPY --from=builder /journal/public ./public
COPY --from=builder /journal/package.json ./package.json
COPY --from=builder /journal/.next ./.next
COPY --from=builder /journal/node_modules ./node_modules

ENV PORT 3000

EXPOSE $PORT


CMD ["yarn", "start"]
