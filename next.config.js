/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import("next").NextConfig} */

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  reactStrictMode: true,
  ignoreDevErrors: false,
  async rewrites() {
    return [
      {
        source: '/api',
        destination: `${process.env.NEXT_PUBLIC_API_GATEWAY}/gql`,
      },
    ]
  },
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
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_GATEWAY: process.env.NEXT_PUBLIC_API_GATEWAY,
  },
}
