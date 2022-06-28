import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const SWIPE_IN = keyframes`
  from {
    width: 0;
  }
  to {
    width: 390px;
  }
`

const SWIPE_OUT = keyframes`
  from {
    width: 390px;
  }
  to {
    width: 0;
  }
`

const FADE_IN = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const FADE_OUT = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

type Props = {
  shouldDisplay: boolean
  animationIn: boolean
  animationOut: boolean
  transitionTime: number
}
export const Drawer = styled.div<Props>`
  position: static;
  left: 0;
  top: 0;
  bottom: 0;
  width: 390px;

  display: ${({ shouldDisplay }) => (shouldDisplay ? 'flex' : 'none')};
  flex-direction: column;
  flex-shrink: 0;

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
    position: fixed;

    z-index: 1;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

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
