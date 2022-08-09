import { useTheme } from '@emotion/react'
import { useMediaQuery } from 'react-responsive'

export const useIsLargeDesktopAndAbove = () => {
  const {
    breakpoints: { lg },
  } = useTheme()

  return useMediaQuery({ minWidth: lg })
}

export const useIsLargeDesktop = () => {
  const {
    breakpoints: { lg, xl },
  } = useTheme()

  return useMediaQuery({ maxWidth: parseInt(xl) - 1, minWidth: lg })
}

export const useIsLargeDesktopAndBelow = () => {
  const {
    breakpoints: { xl },
  } = useTheme()

  return useMediaQuery({ maxWidth: parseInt(xl) - 1 })
}

export const useIsDesktopAndAbove = () => {
  const {
    breakpoints: { md },
  } = useTheme()

  return useMediaQuery({ minWidth: md })
}

export const useIsDesktop = () => {
  const {
    breakpoints: { md, lg },
  } = useTheme()

  return useMediaQuery({ maxWidth: parseInt(lg) - 1, minWidth: md })
}

export const useIsDesktopAndBelow = () => {
  const {
    breakpoints: { lg },
  } = useTheme()

  return useMediaQuery({ maxWidth: parseInt(lg) - 1 })
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
    breakpoints: { md },
  } = useTheme()

  return useMediaQuery({ maxWidth: parseInt(md) - 1 })
}

export const useIsMobile = () => {
  const {
    breakpoints: { sm },
  } = useTheme()

  return useMediaQuery({ maxWidth: parseInt(sm) - 1 })
}
