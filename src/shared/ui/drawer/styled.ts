import styled from '@emotion/styled'
import { Props } from './types'

export const DrawerArea = styled.div`
  grid-area: drawer;
`

// noinspection CssInvalidPropertyValue
export const DrawerBlock = styled.div<Props>`
  min-height: stretch;
  height: 100%;
  max-height: stretch;
  position: fixed;
  top: -70px;
  transform: translateY(70px);
  right: 0;
  z-index: 100;
  display: ${({ open }) => (open ? 'flex' : 'none')};

  // Фулл-скрин
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100% !important;
  }
`
