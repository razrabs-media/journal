/* eslint-disable @next/next/no-css-tags */
import { Head, Html, Main, NextScript } from 'next/document'
import { FC } from 'react'

const Document: FC = () => (
  <Html lang='ru'>
    <Head>
      <link
        as='font'
        crossOrigin=''
        href='/fonts/styrene/styrene-bold.woff2'
        rel='preload'
        type='font/woff2'
      />
      <link
        as='font'
        crossOrigin=''
        href='/fonts/styrene/styrene-medium.woff2'
        rel='preload'
        type='font/woff2'
      />
      <link
        as='font'
        crossOrigin=''
        href='/fonts/styrene/styrene-regular.woff2'
        rel='preload'
        type='font/woff2'
      />
      <link
        as='font'
        crossOrigin=''
        href='/fonts/jetbrains/JetBrainsMono-Bold.woff2'
        rel='preload'
        type='font/woff2'
      />
      <link
        as='font'
        crossOrigin=''
        href='/fonts/jetbrains/JetBrainsMono-Regular.woff2'
        rel='preload'
        type='font/woff2'
      />
      <link href='/fonts/styles.css' rel='stylesheet' />
    </Head>

    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
