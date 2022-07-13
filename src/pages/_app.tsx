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
import { useSyncScroll } from 'shared/lib'
import { getContextMedia, withMediaProvider } from 'shared/lib/client-hints'
import {
  FloatGrid,
  Footer,
  GridArea,
  MainGrid,
  ScrollFloatGrid,
} from 'shared/ui'
import { Drawer } from '../widgets/drawer'

const _App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo()

  useSyncScroll()

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
                <FloatGrid>
                  <GridArea area='content'>
                    <Header />
                  </GridArea>
                </FloatGrid>

                <ScrollFloatGrid id='main'>
                  <GridArea area='content'>
                    <Component {...pageProps} />

                    <Footer />
                  </GridArea>
                </ScrollFloatGrid>
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
App.getInitialProps = async ({ ctx }: { ctx: NextPageContext }) => {
  const contextMedia = getContextMedia(ctx)

  return { media: contextMedia }
}

export default App
