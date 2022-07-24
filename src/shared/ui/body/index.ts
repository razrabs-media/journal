import styled from '@emotion/styled'

export const Body = styled.body`
  display: grid;
  grid-template-rows: 1fr repeat(10, 0px);
  width: 100vw;
  overflow-x: hidden;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};

  &::selection {
    color: ${({ theme }) => theme.colors.contrastPrimary};
    background-color: ${({ theme }) => theme.colors.brand};
  }

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-button {
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  *::selection {
    color: ${({ theme }) => theme.colors.contrastPrimary};
    background-color: ${({ theme }) => theme.colors.brand};
  }

  *::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  *::-webkit-scrollbar-button {
  }

  *::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 100px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-corner {
    background: transparent;
  }
`
