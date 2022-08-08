import { css, Theme } from '@emotion/react'

export const body = (theme: Theme) => css`
  body {
    display: grid;
    grid-template-rows: 1fr repeat(10, 0px);
    width: 100vw;
    //noinspection CssInvalidPropertyValue
    overflow: overlay;
    overflow-x: hidden;
    color: ${theme.colors.primary};
    background-color: ${theme.colors.background};

    &::selection {
      color: ${theme.colors.contrastPrimary};
      background-color: ${theme.colors.brand};
    }

    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    &::-webkit-scrollbar-button {
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.secondary};
      border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.primary};
    }

    &::-webkit-scrollbar-track {
      background: ${theme.colors.background};
    }

    &::-webkit-scrollbar-corner {
      background: transparent;
    }

    *::selection {
      color: ${theme.colors.contrastPrimary};
      background-color: ${theme.colors.brand};
    }

    *::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    *::-webkit-scrollbar-button {
    }

    *::-webkit-scrollbar-thumb {
      background: ${theme.colors.secondary};
      border-radius: 100px;
    }

    *::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.primary};
    }

    *::-webkit-scrollbar-track {
      background: transparent;
    }

    *::-webkit-scrollbar-corner {
      background: transparent;
    }
  }
`
