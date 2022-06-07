import { useTheme } from '@emotion/react'
import { useMediaQuery } from 'react-responsive'

export const useIsDesktop = () => {
  const {
    breakpoints: { lg },
  } = useTheme()

  return useMediaQuery({ minWidth: lg })
}

export const useIsTabletAndAbove = () => {
  const {
    breakpoints: { sm },
  } = useTheme()

  return useMediaQuery({ minWidth: sm })
}

export const useIsTablet = () => {
  const {
    breakpoints: { md, sm },
  } = useTheme()

  return useMediaQuery({ maxWidth: parseInt(md) - 1, minWidth: sm })
}

export const useIsTabletAndBelow = () => {
  const {
    breakpoints: { lg },
  } = useTheme()

  return useMediaQuery({ maxWidth: parseInt(lg) - 1 })
}

export const useIsMobile = () => {
  const {
    breakpoints: { sm },
  } = useTheme()

  return useMediaQuery({ maxWidth: parseInt(sm) - 1 })
}
