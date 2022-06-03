import { Global, ThemeProvider } from '@emotion/react'
import { Head, Html, Main, NextScript } from 'next/document'
import { FC } from 'react'
import { ThemeData, ThemeName } from 'shared/config'
import { Body, FONT_FACE, GLOBAL_STYLES } from 'shared/ui'

const DEFAULT_THEME = ThemeData[ThemeName.Dark]

const Document: FC = () => (
  <Html>
    <ThemeProvider theme={DEFAULT_THEME}>
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
