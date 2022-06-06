/* eslint-disable react/jsx-no-useless-fragment */
import { useTheme } from '@emotion/react'
import type { FC, ReactNode } from 'react'
import { useMediaQuery } from 'react-responsive'

type MediaQueryComponentProps = {
  children: ReactNode
}

const Desktop: FC<MediaQueryComponentProps> = ({ children }) => {
  const {
    breakpoints: { lg },
  } = useTheme()

  const isDesktop = useMediaQuery({ minWidth: lg })
  return isDesktop ? <>{children}</> : null
}

const TabletAndAbove: FC<MediaQueryComponentProps> = ({ children }) => {
  const {
    breakpoints: { sm },
  } = useTheme()

  const isTablet = useMediaQuery({ minWidth: sm })

  return isTablet ? <>{children}</> : null
}

const Tablet: FC<MediaQueryComponentProps> = ({ children }) => {
  const {
    breakpoints: { md, sm },
  } = useTheme()

  const isTablet = useMediaQuery({ maxWidth: parseInt(md) - 1, minWidth: sm })
  return isTablet ? <>{children}</> : null
}

const TabletAndBelow: FC<MediaQueryComponentProps> = ({ children }) => {
  const {
    breakpoints: { lg },
  } = useTheme()

  const isTablet = useMediaQuery({ maxWidth: parseInt(lg) - 1 })

  return isTablet ? <>{children}</> : null
}

const Mobile: FC<MediaQueryComponentProps> = ({ children }) => {
  const {
    breakpoints: { sm },
  } = useTheme()

  const isMobile = useMediaQuery({ maxWidth: parseInt(sm) - 1 })
  return isMobile ? <>{children}</> : null
}

export { Desktop, TabletAndAbove, Tablet, TabletAndBelow, Mobile }
