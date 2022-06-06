import styled from '@emotion/styled'

export const Wrapper = styled.a`
  position: relative;

  &:hover p {
    color: ${({ theme }) => theme.colors.brand};
  }
`
