import { Global, ThemeProvider } from '@emotion/react'
import { themeDark } from '@razrabs-ui/theme'
import { Head, Html, Main, NextScript } from 'next/document'
import { FC } from 'react'
import { Body, FONT_FACE, GLOBAL_STYLES } from 'shared/ui'

const Document: FC = () => (
  <Html lang='ru'>
    <ThemeProvider theme={themeDark}>
      <Global styles={FONT_FACE} />
      <Global styles={GLOBAL_STYLES} />
      <Head />
      <Body>
        <Main />
        <NextScript />
      </Body>
    </ThemeProvider>
  </Html>
)

export default Document
