/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    dest: 'public',
    runtimeCaching,
  },
  ignoreDevErrors: false,
  rewrites: () => [
    {
      source: '/api',
      destination: `${process.env.NEXT_PUBLIC_API_GATEWAY}/gql`,
    },
    {
      source: '/auth/github',
      destination: `${process.env.NEXT_PUBLIC_API_GATEWAY}/auth/github`,
    },
    {
      source: '/auth/github/callback',
      destination: `${process.env.NEXT_PUBLIC_API_GATEWAY}/auth/github/callback`,
    },
  ],
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
})
