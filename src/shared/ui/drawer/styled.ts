import styled from '@emotion/styled'
import { MediaScreen } from 'shared/ui/theme/responsive'
import { Props } from './types'

export const DrawerArea = styled.div`
  grid-area: drawer;
  position: relative;
`

// noinspection CssInvalidPropertyValue
export const DrawerBlock = styled.div<Props>`
  min-height: 100vh;
  min-height: 100dvh;
  height: 100vh;
  height: 100dvh;
  max-height: 100vh;
  max-height: 100dvh;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  display: ${({ open }) => (open ? 'flex' : 'none')};

  ${MediaScreen.tabletAndBelow} {
    width: 100% !important;
    max-width: 100%;
  }

  @supports (-webkit-touch-callout: none) {
    min-height: 100dvh;
    height: 100dvh;
  }
`
