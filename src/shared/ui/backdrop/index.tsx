import styled from '@emotion/styled'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { FC, useEffect, useRef } from 'react'
import type { Props } from './types'

const StyledBackdrop = styled.div<Props>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
  -webkit-tap-highlight-color: transparent;
  color: #fff;
  z-index: 25;
`

export const Backdrop: FC<Props> = ({ ...props }) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const target = ref.current

    if (props.open) {
      target && disableBodyScroll(target)
      return
    }
    target && enableBodyScroll(target)

    // eslint-disable-next-line consistent-return
    return () => {
      target && enableBodyScroll(target)
    }
  }, [props.open])

  return <StyledBackdrop ref={ref} {...props} />
}
