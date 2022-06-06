import { ThemeProvider } from '@emotion/react'
import { themeDark } from '@razrabs-ui/theme'
import type { NextPageContext } from 'next'
import { useEffect, useState } from 'react'
import { Context as ResponsiveContext } from 'react-responsive'
import type { AppProps as _AppProps } from 'next/app'
import { Header } from 'widgets/header'
import { Footer, GridArea, MainGrid, StickyGridArea } from 'shared/ui'

type AppProps = {
  suggestedWidth: number
} & _AppProps

const App = ({ Component, pageProps, suggestedWidth }: AppProps) => {
  const app = (
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

  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    setInitialized(true)
  }, [])

  return initialized ? (
    app
  ) : (
    <ResponsiveContext.Provider value={{ width: suggestedWidth }}>
      {app}
    </ResponsiveContext.Provider>
  )
}

App.getInitialProps = async ({ ctx }: { ctx: NextPageContext }) => {
  const parser = eval("require('ua-parser-js')") // it's not bundled to a browser js

  const userAgent = parser(ctx.req?.headers['user-agent'])
  const deviceType = userAgent.device.type

  // TODO сохранять suggestedWidth в куки и брать оттуда
  const suggestedWidth =
    deviceType === 'mobile'
      ? parseInt(themeDark.breakpoints.sm) - 1
      : deviceType === 'tablet'
      ? parseInt(themeDark.breakpoints.md) - 1
      : parseInt(themeDark.breakpoints.lg)

  return { suggestedWidth }
}

export default App
