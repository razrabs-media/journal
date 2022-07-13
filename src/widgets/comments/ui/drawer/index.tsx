import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { FADE_IN, FADE_OUT, SWIPE_IN, SWIPE_OUT } from './styled'
import { Props } from './types'

export const Drawer = styled.div<Props>`
  grid-area: drawer;
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

  ${({ animationIn, animationOut, transitionTime }) =>
    animationIn
      ? css`
          animation: ${SWIPE_IN} ${transitionTime}ms ease-in;
        `
      : animationOut
      ? css`
          animation: ${SWIPE_OUT} ${transitionTime}ms ease-out forwards;
        `
      : null};

  // Фулл-скрин
  @media screen and (max-width: 1193px) {
    z-index: 1;

    ${({ animationIn, animationOut, transitionTime }) =>
      animationIn
        ? css`
            animation: ${FADE_IN} ${transitionTime}ms ease-in;
          `
        : animationOut
        ? css`
            animation: ${FADE_OUT} ${transitionTime}ms ease-out;
          `
        : null};
  }
`
