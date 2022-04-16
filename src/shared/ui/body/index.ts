import styled from '@emotion/styled'

export const Body = styled.body`
  min-height: 100vh;

  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background};

  &::selection {
    color: ${({ theme }) => theme.colors.accentText};
    background-color: ${({ theme }) => theme.colors.accent};
  }

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-button {
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.text.secondary};
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.text.primary};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  *::selection {
    color: ${({ theme }) => theme.colors.accentText};
    background-color: ${({ theme }) => theme.colors.accent};
  }

  *::-webkit-scrollbar {
    width: 4px;
    height: 4px;
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