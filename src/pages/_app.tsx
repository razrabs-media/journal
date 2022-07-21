import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@emotion/react'
import { themeDark } from '@razrabs-ui/theme'
import Head from 'next/head'
import NextApp, { AppContext, AppProps } from 'next/app'
import { CommentsWidget } from 'widgets/comments'
import { Drawer } from 'widgets/drawer'
import { Header } from 'widgets/header'
import { CommentsProvider } from 'entities/comments'
import { initializeApollo, useApollo } from 'shared/api'
import { getContextMedia, withMediaProvider } from 'shared/lib'
import { Footer, GridArea, MainGrid } from 'shared/ui'
import { CurrentTime, CurrentTimeQuery } from '../entities/clock'

const _App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo()

  return (
    <>
      {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
      <Head>
        <meta
          content='width=device-width, height=device-height, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0'
          name='viewport'
        />
      </Head>
      <ThemeProvider theme={themeDark}>
        <ApolloProvider client={apolloClient}>
          <CommentsProvider>
            <Drawer>
              <MainGrid>
                <GridArea area='header'>
                  <Header currentTime={pageProps.currentTime} />
                </GridArea>

                <GridArea area='content'>
                  <Component {...pageProps} />
                </GridArea>

                <GridArea area='footer'>
                  <Footer />
                </GridArea>
              </MainGrid>

              <CommentsWidget />
            </Drawer>
          </CommentsProvider>
        </ApolloProvider>
      </ThemeProvider>
    </>
  )
}

const App = withMediaProvider(_App)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
App.getInitialProps = async (appCtx: AppContext) => {
  const contextMedia = getContextMedia(appCtx.ctx)
  const appProps = await NextApp.getInitialProps(appCtx)
  const apolloClient = initializeApollo()

  const {
    data: { currentTime },
  } = await apolloClient.query<CurrentTime>({
    query: CurrentTimeQuery,
    fetchPolicy: 'no-cache',
  })

  return {
    pageProps: { ...appProps.pageProps, currentTime },
    media: contextMedia,
  }
}

export default App
