import { Global } from '@emotion/react'
import { Head, Html, Main, NextScript } from 'next/document'
import { FC } from 'react'
import { FONT_FACE, GLOBAL_STYLES } from 'shared/ui'

const Document: FC = () => (
  <Html lang='ru'>
    <Global styles={FONT_FACE} />
    <Global styles={GLOBAL_STYLES} />
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
