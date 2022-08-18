/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  reactStrictMode: true,
  ignoreDevErrors: false,
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin())
    }
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })

    return config
  },
  experimental: {
    scrollRestoration: true,
  },
  serverRuntimeConfig: {
    HOST: process.env.NEXT_PUBLIC_HOST,
    YM_ENABLE: process.env.NEXT_PUBLIC_YANDEX_METRICS_ENABLED,
    YM_CODE: process.env.NEXT_PUBLIC_YANDEX_METRICS_CODE,
  },
  publicRuntimeConfig: {
    HOST: process.env.NEXT_PUBLIC_HOST,
    YM_ENABLE: process.env.NEXT_PUBLIC_YANDEX_METRICS_ENABLED,
    YM_CODE: process.env.NEXT_PUBLIC_YANDEX_METRICS_CODE,
  },
}
