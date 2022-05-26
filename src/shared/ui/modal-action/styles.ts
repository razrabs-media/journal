import styled from '@emotion/styled'

export const Action = styled.div`
  cursor: pointer;
  height: 52px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`
