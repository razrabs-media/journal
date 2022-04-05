import { css } from '@emotion/react'
import styled from '@emotion/styled'

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

export const GLOBAL_STYLES = css`
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    overflow: hidden;
    font-family: Styrene B LC, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }
  a {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  #__next {
    height: 100%;
  }
`

export const Wrapper = styled.div`
  display: grid;
  overflow: auto;
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background};
`

export const Scroll = styled.div`
  height: 100%; // Проценты, а не vh потому что у Safari на мобилках снизу менюшка :)
  display: grid;

  *::selection {
    color: ${({ theme }) => theme.colors.accentText};
    background-color: ${({ theme }) => theme.colors.accent};
  }

  *::-webkit-scrollbar {
    width: 4px;
  }

  *::-webkit-scrollbar-button {
  }

  *::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.text.secondary};
    border-radius: 100px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.text.primary};
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  *::-webkit-scrollbar-corner {
    background: transparent;
  }
`

export const MainGrid = styled.div`
  display: grid;
  row-gap: 24px;
  grid-template:
    '. header .' 54px
    '. content .' 1fr
    '. footer .' auto /
    minmax(24px, auto) minmax(auto, 1872px) minmax(24px, auto);

  @media screen and (max-width: 671px) {
    grid-template:
      '. header .' 54px
      '. content .' 1fr
      '. footer .' auto /
      minmax(10px, auto) minmax(auto, 1872px) minmax(10px, auto);
  }
`

export const HeaderArea = styled.div`
  grid-area: header;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1;
`

export const ContentArea = styled.div`
  grid-area: content;
`

export const FooterArea = styled.div`
  grid-area: footer;
`
