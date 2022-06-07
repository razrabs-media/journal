import { ThemeProvider } from '@emotion/react'
import { themeDark } from '@razrabs-ui/theme'
import type { NextPageContext } from 'next'
import { AppProps } from 'next/app'
import { Header } from 'widgets/header'
import { getContextMedia, withMediaProvider } from 'shared/lib/client-hints'
import { Footer, GridArea, MainGrid, StickyGridArea } from 'shared/ui'

const _App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={themeDark}>
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

const App = withMediaProvider(_App)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
App.getInitialProps = async ({ ctx }: { ctx: NextPageContext }) => {
  const contextMedia = getContextMedia(ctx)

  return { media: contextMedia }
}

export default App
