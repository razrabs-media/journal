import { ThemeProvider } from '@emotion/react'
import { VFC } from 'react'
import type { AppProps } from 'next/app'
import { Header } from 'widgets/header'
import { ThemeData, ThemeName } from 'shared/config'
import { Footer, GridArea, MainGrid, StickyGridArea } from 'shared/ui'

const DEFAULT_THEME = ThemeData[ThemeName.Dark]

const App: VFC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={DEFAULT_THEME}>
    <MainGrid>
      <StickyGridArea area='header'>
        <Header />
      </StickyGridArea>

      <GridArea area='content'>
        <Component {...pageProps} />
      </GridArea>

      <GridArea area='footer'>
        <Footer />
      </GridArea>
    </MainGrid>
  </ThemeProvider>
)

export default App
