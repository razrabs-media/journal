import { ApolloProvider } from '@apollo/client'
import { Global, ThemeProvider } from '@emotion/react'
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/system'
import { getCookie } from 'cookies-next'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Head from 'next/head'
import Router from 'next/router'
import withYM from 'next-ym'
import { memo } from 'react'
import NextApp, { AppContext, AppProps } from 'next/app'
import { CommentsWidget } from 'widgets/comments'
import { Header } from 'widgets/header'
import { useTheme } from 'widgets/header/ui/themeToggler/handler'
import { CommentsProvider } from 'entities/comments'
import { initializeApollo, useApollo } from 'shared/api'
import { getContextMedia, getRuntime, withMediaProvider } from 'shared/lib'
import { body, Footer, globalStyles } from 'shared/ui'
import { CurrentTime, CurrentTimeQuery } from '../entities/clock'
import { Layout } from '../entities/layout'

const breakpoints = {
  xs: '0',
  sm: '672px',
  md: '1000px',
  lg: '1320px',
  xl: '1920px',
  values: {
    xs: 0,
    sm: 672,
    md: 1000,
    lg: 1320,
    xl: 1920,
  } as const,
}

const typography = {
  htmlFontSize: 16,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h2: {
    fontFamily: "Styrene B LC, 'Helvetica', 'Arial', sans-serif",
    fontSize: '32px',
    fontWeight: 500,
    lineHeight: 1.2,
  },
  h3: {
    fontFamily: "Styrene B LC, 'Helvetica', 'Arial', sans-serif",
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: 1.2,
  },
  h5: {
    fontFamily: "Styrene B LC, 'Helvetica', 'Arial', sans-serif",
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 1.2,
  },
  subtitle1: {
    fontFamily: "Styrene B LC, 'Helvetica', 'Arial', sans-serif",
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  body1: {
    fontFamily: "Styrene B LC, 'Helvetica', 'Arial', sans-serif",
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: 1.4,
  },

  body2: {
    fontFamily: "Styrene B LC, 'Helvetica', 'Arial', sans-serif",
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.2,
  },
  caption1: {
    fontFamily: "Styrene B LC, 'Helvetica', 'Arial', sans-serif",
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: 1.2,
  },
  caption2: {
    fontFamily: "Styrene B LC, 'Helvetica', 'Arial', sans-serif",
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: 1.2,
  },
}

const _App = memo(({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo()
  const [theme, toggleTheme] = useTheme(pageProps.theme)
  const muiSystemThemeForGrid = createTheme({
    breakpoints,
    components: theme.components,
    typography,
  })

  const MainLayout = pageProps.post ? (
    <CommentsProvider>
      <Layout
        drawerContent={<CommentsWidget postTitle={pageProps.post?.title} />}
      >
        <Header currentTime={pageProps.currentTime} toggleTheme={toggleTheme} />

        <Component {...pageProps} />

        <Footer />
      </Layout>
    </CommentsProvider>
  ) : (
    <Layout>
      <Header currentTime={pageProps.currentTime} toggleTheme={toggleTheme} />

      <Component {...pageProps} />

      <Footer />
    </Layout>
  )

  return (
    <>
      <Head>
        <meta
          content='width=device-width, height=device-height, initial-scale=1'
          name='viewport'
        />
        <meta charSet='utf-8' />
      </Head>
      <ThemeProvider theme={theme}>
        <MUIThemeProvider theme={muiSystemThemeForGrid}>
          <Global styles={globalStyles(theme)} />
          <Global styles={body(theme)} />
          <ApolloProvider client={apolloClient}>{MainLayout}</ApolloProvider>
        </MUIThemeProvider>
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
