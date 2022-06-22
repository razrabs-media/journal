import styled from '@emotion/styled'

export const IconButton = styled.button`
  cursor: pointer;
  border-radius: 50%;
  background-color: transparent;
  border: 0;
  display: inline-flex;
  padding: 8px;
  margin: -8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  }
`
