import styled from '@emotion/styled'
import { FC, useEffect } from 'react'
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
  useEffect(() => {
    if (props.open) {
      document.body.style.overflow = 'hidden'
      return
    }
    document.body.style.removeProperty('overflow')
  }, [props.open])

  return <StyledBackdrop {...props} />
}
