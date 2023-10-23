/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'raw.githubusercontent.com',
      'github.com',
    ],
  },
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@svgr/webpack',
          options: { babel: false },
        },
      ],
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
