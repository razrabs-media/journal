import { css, Global, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import type { AppProps } from 'next/app'
import { ThemeData, ThemeName } from 'shared/config/theme'
import { Header } from 'widgets/header'

const FONT_FACE = css`
  @font-face {
    font-family: 'Styrene B LC';
    font-weight: 400;
    font-style: normal;

    src: url('/fonts/styrene/styrene-regular.ttf') format('truetype'),
      url('/fonts/styrene/styrene-regular.woff') format('truetype'),
      url('/fonts/styrene/styrene-regular.woff2') format('truetype');
  }

  @font-face {
    font-family: 'JetBrainsMono';
    font-weight: 400;
    font-style: normal;

    src: url('/fonts/Jetbrains/JetBrainsMono-Regular.ttf') format('truetype'),
      url('/fonts/Jetbrains/JetBrainsMono-Regular.woff2') format('truetype');
  }

  @font-face {
    font-family: 'JetBrainsMono';
    font-weight: 700;
    font-style: normal;

    src: url('/fonts/Jetbrains/JetBrainsMono-Bold.ttf') format('truetype'),
      url('/fonts/Jetbrains/JetBrainsMono-Bold.woff2') format('truetype');
  }

  @font-face {
    font-family: 'Styrene B LC';
    font-weight: 700;
    font-style: normal;

    src: url('/fonts/styrene/styrene-bold.ttf') format('truetype'),
      url('/fonts/styrene/styrene-bold.woff') format('truetype'),
      url('/fonts/styrene/styrene-bold.woff2') format('truetype');
  }
`
const GLOBAL_STYLES = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Styrene B LC, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }
`

const DEFAULT_THEME = ThemeData[ThemeName.Dark]

const StyledBody = styled.div`
  font-size: 20px;

  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background};

  min-height: 100vh;

  *::selection {
    color: ${({ theme }) => theme.colors.accentText};
    background-color: ${({ theme }) => theme.colors.accent};
  }
`

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={DEFAULT_THEME}>
    <Global styles={FONT_FACE} />
    <Global styles={GLOBAL_STYLES} />

    <StyledBody>
      <Header />

      <Component {...pageProps} />
    </StyledBody>
  </ThemeProvider>
)

export default MyApp
