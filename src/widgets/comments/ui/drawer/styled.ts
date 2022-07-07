import { keyframes } from '@emotion/react'

export const SWIPE_IN = keyframes`
  from {
    width: 0;
  }
  to {
    width: 525px;
  }
`

export const SWIPE_OUT = keyframes`
  from {
    width: 525px;
  }
  to {
    width: 0;
  }
`

export const FADE_IN = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const FADE_OUT = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`
