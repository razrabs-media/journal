/* eslint-disable react/jsx-no-duplicate-props */
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

      <link href='https://fonts.googleapis.com' rel='preconnect' />
      <link
        crossOrigin='anonymous'
        href='https://fonts.gstatic.com'
        rel='preconnect'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap'
        rel='stylesheet'
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
