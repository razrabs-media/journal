/* eslint-disable react/jsx-no-useless-fragment */
import type { FC, ReactNode } from 'react'
import {
  useIsDesktop,
  useIsMobile,
  useIsTablet,
  useIsTabletAndAbove,
  useIsTabletAndBelow,
} from './hooks'

type MediaQueryComponentProps = {
  children: ReactNode
}

const Desktop: FC<MediaQueryComponentProps> = ({ children }) => {
  const isDesktop = useIsDesktop()

  return isDesktop ? <>{children}</> : null
}

const TabletAndAbove: FC<MediaQueryComponentProps> = ({ children }) => {
  const isTabletAndAbove = useIsTabletAndAbove()

  return isTabletAndAbove ? <>{children}</> : null
}

const Tablet: FC<MediaQueryComponentProps> = ({ children }) => {
  const isTablet = useIsTablet()

  return isTablet ? <>{children}</> : null
}

const TabletAndBelow: FC<MediaQueryComponentProps> = ({ children }) => {
  const isTabletAndBelow = useIsTabletAndBelow()

  return isTabletAndBelow ? <>{children}</> : null
}

const Mobile: FC<MediaQueryComponentProps> = ({ children }) => {
  const isMobile = useIsMobile()

  return isMobile ? <>{children}</> : null
}

export { Desktop, TabletAndAbove, Tablet, TabletAndBelow, Mobile }
export * from './hooks'
