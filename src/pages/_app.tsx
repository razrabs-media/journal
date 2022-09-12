import { ApolloProvider } from '@apollo/client'
import { Global, ThemeProvider } from '@emotion/react'
import { getCookie } from 'cookies-next'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import withYM from 'next-ym'
import Head from 'next/head'
import Router from 'next/router'
import { memo } from 'react'
import NextApp, { AppContext, AppProps } from 'next/app'
import { CommentsWidget } from 'widgets/comments'
import { Header } from 'widgets/header'
import { useTheme } from 'widgets/header/ui/themeToggler/handler'
import { CommentsProvider } from 'entities/comments'
import { initializeApollo, useApollo } from 'shared/api'
import { getContextMedia, getRuntime, withMediaProvider } from 'shared/lib'
import { body, FONT_FACE, Footer, globalStyles } from 'shared/ui'
import { CurrentTime, CurrentTimeQuery } from '../entities/clock'
import { Layout } from '../entities/layout'

const _App = memo(({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo()
  const [theme, toggleTheme] = useTheme(pageProps.theme)

  return (
    <>
      {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
      <Head>
        <meta
          content='width=device-width, height=device-height, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0'
          name='viewport'
        />
        <meta charSet='utf-8' />
      </Head>
      <ThemeProvider theme={theme}>
        <Global styles={body(theme)} />
        <Global styles={FONT_FACE} />
        <Global styles={globalStyles(theme)} />
        <ApolloProvider client={apolloClient}>
          <CommentsProvider>
            <Layout
              drawerContent={
                <CommentsWidget postTitle={pageProps.post?.title} />
              }
            >
              <Header
                currentTime={pageProps.currentTime}
                toggleTheme={toggleTheme}
              />

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

const YM_CODE = getRuntime('YM_CODE')
const YM_ENABLE = getRuntime('YM_ENABLE')

const AppYM = YM_ENABLE ? withYM(YM_CODE, Router)(_App) : _App

const App = withMediaProvider(AppYM)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
App.getInitialProps = async (appCtx: AppContext) => {
  const contextMedia = getContextMedia(appCtx.ctx)
  const appProps = await NextApp.getInitialProps(appCtx)
  const apolloClient = initializeApollo()
  const theme = getCookie('theme', { req: appCtx.ctx.req })

  const {
    data: { currentTime },
  } = await apolloClient.query<CurrentTime>({
    query: CurrentTimeQuery,
    fetchPolicy: 'no-cache',
  })

  return {
    pageProps: { ...appProps.pageProps, currentTime, theme },
    media: contextMedia,
  }
}

export default App
