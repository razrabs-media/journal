FROM node:16.15.0-alpine as dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:16.15.0-alpine as builder
WORKDIR /app

COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN yarn build

FROM nginx:stable-alpine as runner
WORKDIR /usr/share/nginx/html
ENV NODE_ENV=production
RUN rm -rf ./*
RUN addgroup -g 1001 -S runner
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

USER nextjs
EXPOSE 80
ENV PORT 80

CMD ["nginx", "-g", "daemon off;"]
