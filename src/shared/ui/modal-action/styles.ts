import styled from '@emotion/styled'

export const Action = styled.button`
  cursor: pointer;
  height: 100px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  stroke: ${({ theme }) => theme.colors.primary};
`
