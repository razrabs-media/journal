//noinspection CssInvalidPropertyValue

import styled from '@emotion/styled'
import { Props } from './types'

export const CommentsWrapper = styled.div<Props>`
  grid-area: drawer;
  position: sticky;
  top: 0;
  z-index: 1;
  width: 525px;
  /* mobile fix */
  height: -moz-available;
  height: -webkit-fill-available;
  height: fill-available;
  /* ---------- */
  height: 100vh;

  display: ${({ shouldDisplay }) => (shouldDisplay ? 'grid' : 'none')};
  flex-direction: column;
  flex-shrink: 0;

  grid-template-areas:
    'header'
    'content'
    'action';

  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;

  background: ${({ theme }) => theme.colors.backgroundSecondary};

  // Фулл-скрин
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;

    z-index: 1;

    top: 0;
    left: 0;
    width: 100%;
  }
`
