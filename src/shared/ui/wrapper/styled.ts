import styled from '@emotion/styled'
import { Props } from './types'

export const Wrapper = styled.div<Props>`
  display: grid;
  grid-template:
    '. . main main main . drawer' 1fr /
    minmax(0, calc((100% - 1920px) / 2)) 24px
    minmax(auto, 624px) minmax(auto, 624px) minmax(auto, 624px)
    minmax(24px, auto) ${({ open }) => (open ? 'minmax(auto, 624px)' : 0)};

  @media screen and (max-width: 1920px) {
    grid-template:
      '. . ${({ open }) => `main `.repeat(open ? 2 : 3)} . drawer' 1fr /
      minmax(0, calc((100% - 1920px) / 2)) 24px
      ${({ open }) => `1fr `.repeat(open ? 2 : 3)}
      minmax(24px, auto) ${({ open }) => (open ? '1fr' : 0)};
  }
`
