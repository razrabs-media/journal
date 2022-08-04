import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@emotion/react'
import { themeDark } from '@razrabs-ui/theme'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import withYM from 'next-ym'
import getConfig from 'next/config'
import Head from 'next/head'
import Router from 'next/router'
import { memo } from 'react'
import NextApp, { AppContext, AppProps } from 'next/app'
import { CommentsWidget } from 'widgets/comments'
import { Header } from 'widgets/header'
import { CommentsProvider } from 'entities/comments'
import { initializeApollo, useApollo } from 'shared/api'
import { getContextMedia, withMediaProvider } from 'shared/lib'
import { Footer } from 'shared/ui'
import { CurrentTime, CurrentTimeQuery } from '../entities/clock'
import { Layout } from '../entities/layout'

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

const _App = memo(({ Component, pageProps }: AppProps) => {
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
            <Layout
              drawerContent={
                <CommentsWidget postTitle={pageProps.post?.title} />
              }
            >
              <Header currentTime={pageProps.currentTime} />

              <Component {...pageProps} />

              <Footer />
            </Layout>
          </CommentsProvider>
        </ApolloProvider>
      </ThemeProvider>
    </>
  )
})

_App.displayName = 'App'

const isServerSide = typeof window === 'undefined'
const { YM_CODE, YM_ENABLE } = isServerSide
  ? serverRuntimeConfig
  : publicRuntimeConfig

const AppYM = YM_ENABLE ? withYM(YM_CODE, Router)(_App) : _App

const App = withMediaProvider(AppYM)

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
