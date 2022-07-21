import styled from '@emotion/styled'
import { Props } from './types'

export const DrawerGrid = styled.div<Props>`
  display: grid;
  grid-template:
    'main drawer' /
    auto ${({ open }) => (open ? '525px' : 0)};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template:
      'main drawer' /
      ${({ open }) => (open ? '0  1fr' : '1fr 0')};
  }
`
