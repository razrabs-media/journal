import styled from '@emotion/styled'
import { Props } from './types'

export const CommentsWrapper = styled.div<Props>`
  //noinspection CssInvalidPropertyValue
  height: stretch;
  grid-area: drawer;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  width: 525px;

  display: ${({ shouldDisplay }) => (shouldDisplay ? 'grid' : 'none')};
  flex-direction: column;
  flex-shrink: 0;

  grid-template:
    'header' auto
    'content' 1fr
    'action' auto /
    1fr;

  background: ${({ theme }) => theme.colors.backgroundSecondary};

  // Фулл-скрин
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`
