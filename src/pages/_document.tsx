import { Global, ThemeProvider } from '@emotion/react'
import { themeDark } from '@razrabs-ui/theme'
import { Head, Html, Main, NextScript } from 'next/document'
import { FC } from 'react'
import { Body, FONT_FACE, GLOBAL_STYLES } from 'shared/ui'

const Document: FC = () => (
  <Html>
    <ThemeProvider theme={themeDark}>
      <Global styles={FONT_FACE} />
      <Global styles={GLOBAL_STYLES} />
      <Head>
        <link href='/favicon.svg' rel='shortcut icon' />
      </Head>
      <Body>
        <Main />
        <NextScript />
      </Body>
    </ThemeProvider>
  </Html>
)

export default Document
