//noinspection CssInvalidPropertyValue

import { css, Theme } from '@emotion/react'

export const FONT_FACE = css`
  @font-face {
    font-family: 'Styrene B LC';
    font-weight: 400;
    font-style: normal;

    src: url('/fonts/styrene/styrene-regular.ttf') format('truetype'),
      url('/fonts/styrene/styrene-regular.woff') format('truetype'),
      url('/fonts/styrene/styrene-regular.woff2') format('truetype');
  }

  @font-face {
    font-family: 'Styrene B LC';
    font-weight: 500;
    font-style: normal;

    src: url('/fonts/styrene/styrene-medium.ttf') format('truetype'),
      url('/fonts/styrene/styrene-medium.woff') format('truetype'),
      url('/fonts/styrene/styrene-medium.woff2') format('truetype');
  }

  @font-face {
    font-family: 'JetBrainsMono';
    font-weight: 400;
    font-style: normal;

    src: url('/fonts/jetbrains/JetBrainsMono-Regular.ttf') format('truetype'),
      url('/fonts/jetbrains/JetBrainsMono-Regular.woff2') format('truetype');
  }

  @font-face {
    font-family: 'JetBrainsMono';
    font-weight: bold;
    font-style: normal;

    src: url('/fonts/jetbrains/JetBrainsMono-Bold.ttf') format('truetype'),
      url('/fonts/jetbrains/JetBrainsMono-Bold.woff2') format('truetype');
  }

  @font-face {
    font-family: 'Styrene B LC';
    font-weight: bold;
    font-style: normal;

    src: url('/fonts/styrene/styrene-bold.ttf') format('truetype'),
      url('/fonts/styrene/styrene-bold.woff') format('truetype'),
      url('/fonts/styrene/styrene-bold.woff2') format('truetype');
  }
`

export const globalStyles = (theme: Theme) => css`
  html {
    /* Fix для chrome desktop */
    height: 100%;
    max-height: stretch;
  }
  body {
    min-height: stretch;
    height: 100%;
    max-height: stretch;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Styrene B LC, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: none;
      color: ${theme.colors.brand};
    }
  }

  #__next {
    display: grid;
  }
`
