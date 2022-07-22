import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock'
import { PropsWithChildren, useEffect, useRef } from 'react'
import { FADE_IN, FADE_OUT, SWIPE_IN, SWIPE_OUT } from './styled'
import { Props } from './types'

const StyledDrawer = styled.div<Props>`
  position: relative;
  width: 525px;

  display: ${({ shouldDisplay }) => (shouldDisplay ? 'grid' : 'none')};
  flex-direction: column;
  flex-shrink: 0;

  grid-template-areas:
    'header'
    'content'
    'action';

  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;

  overflow: hidden;
  height: 100%;

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
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
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

export const Drawer = ({ ...props }: PropsWithChildren<Props>) => {
  const ref = useRef<HTMLDivElement>(null)

  const onHide = () => {
    const target = ref.current
    target && enableBodyScroll(target)
  }

  const onShow = (e: TouchEvent | Event) => {
    const target = ref.current
    e.stopImmediatePropagation()
    e.stopPropagation()
    target && disableBodyScroll(target)
  }

  const attachEvents = () => {
    if (ref.current) {
      document.body.addEventListener('touchmove', onHide, { passive: true })
      document.body.addEventListener('scroll', onHide, { passive: true })

      ref.current.addEventListener('touchmove', onShow, { passive: true })
      ref.current.addEventListener('scroll', onShow, { passive: true })
    }
  }

  const detachEvents = () => {
    if (ref.current) {
      document.body.removeEventListener('touchmove', onHide)
      document.body.removeEventListener('scroll', onHide)

      ref.current.removeEventListener('touchmove', onShow)
      ref.current.removeEventListener('scroll', onShow)
    }
  }

  useEffect(() => {
    attachEvents()

    if (!props.shouldDisplay) {
      detachEvents()
    }

    // eslint-disable-next-line consistent-return
    return () => {
      detachEvents()
      clearAllBodyScrollLocks()
    }
  })

  return <StyledDrawer ref={ref} {...props} />
}
