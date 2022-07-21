import styled from '@emotion/styled'

export const Body = styled.body`
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  margin: 0;

  &::-webkit-scrollbar {
    display: none;
    width: 0;
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
