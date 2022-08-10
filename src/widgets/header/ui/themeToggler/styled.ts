import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  stroke: ${({ theme }) => theme.colors.primary};
  margin-right: 12px;
`

export const ThemeButton = styled.button`
  all: unset;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;

  font-weight: 500;
  line-height: 100%;
  letter-spacing: 1px;

  :disabled {
    color: ${({ theme }) => theme.colors.secondary};
    cursor: default;
  }
`

export const Separator = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0 6px 0 6px;
  cursor: default;
`
