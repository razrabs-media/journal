import styled from '@emotion/styled'
import { Props } from './types'

export const DrawerGrid = styled.div<Props>`
  display: grid;
  position: sticky;
  top: 0;
  height: 100vh;

  grid-template:
    'main drawer' /
    auto ${({ open }) => (open ? 'minmax(auto, 525px)' : 0)};

  @media screen and (max-width: 671px) {
    grid-template:
      'main drawer' /
      ${({ open }) => (open ? '0  1fr' : '1fr 0')};
  }
`
