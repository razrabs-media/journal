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
      '. main . drawer' 1fr /
      24px
      calc((100% - 48px) * ${({ open }) => (open ? 2 / 3.0 : 1)})
      24px
      calc((100% - 48px) * ${({ open }) => (open ? 1 / 3.0 : 0)});
  }

  @media screen and (max-width: 671px) {
    grid-template:
      '. . ${({ open }) => `main `.repeat(open ? 2 : 3)} . drawer' 1fr /
      minmax(0, calc((100% - 1920px) / 2)) 10px
      ${({ open }) => `1fr `.repeat(open ? 2 : 3)}
      minmax(10px, auto) ${({ open }) => (open ? '1fr' : 0)};
  }
`
