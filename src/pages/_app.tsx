import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@emotion/react'
import { themeDark } from '@razrabs-ui/theme'
import type { NextPageContext } from 'next'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { CommentsWidget } from 'widgets/comments'
import { Header } from 'widgets/header'
import { CommentsProvider } from 'entities/comments'
import { useApollo } from 'shared/api'
import { getContextMedia, withMediaProvider } from 'shared/lib/client-hints'
import {
  DrawerGrid,
  Footer,
  GridArea,
  MainGrid,
  StickyGridArea,
} from 'shared/ui'

const _App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo()

  return (
    <>
      {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
      <Head>
        <meta
          content='width=device-width, initial-scale=1, maximum-scale=1'
          name='viewport'
        />
      </Head>
      <ThemeProvider theme={themeDark}>
        <ApolloProvider client={apolloClient}>
          <CommentsProvider>
            <DrawerGrid>
              <GridArea area='main' style={{ overflowY: 'scroll' }}>
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
              </GridArea>

              <StickyGridArea area='drawer' style={{ overflowY: 'scroll' }}>
                <CommentsWidget />
              </StickyGridArea>
            </DrawerGrid>
          </CommentsProvider>
        </ApolloProvider>
      </ThemeProvider>
    </>
  )
}

const App = withMediaProvider(_App)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
App.getInitialProps = async ({ ctx }: { ctx: NextPageContext }) => {
  const contextMedia = getContextMedia(ctx)

  return { media: contextMedia }
}

export default App
