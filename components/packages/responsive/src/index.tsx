/* eslint-disable react/jsx-no-useless-fragment */
import type { FC, ReactNode } from 'react'
import {
  useIsDesktop,
  useIsDesktopAndAbove,
  useIsDesktopAndBelow,
  useIsLargeDesktop,
  useIsLargeDesktopAndAbove,
  useIsLargeDesktopAndBelow,
  useIsMobile,
  useIsTablet,
  useIsTabletAndAbove,
  useIsTabletAndBelow,
} from './hooks'

type MediaQueryComponentProps = {
  children: ReactNode
}

const LargeDesktopAndAbove: FC<MediaQueryComponentProps> = ({ children }) => {
  const isLargeDesktopAndAbove = useIsLargeDesktopAndAbove()

  return isLargeDesktopAndAbove ? <>{children}</> : null
}

const LargeDesktop: FC<MediaQueryComponentProps> = ({ children }) => {
  const isLargeDesktop = useIsLargeDesktop()

  return isLargeDesktop ? <>{children}</> : null
}

const LargeDesktopAndBelow: FC<MediaQueryComponentProps> = ({ children }) => {
  const isLargeDesktopAndBelow = useIsLargeDesktopAndBelow()

  return isLargeDesktopAndBelow ? <>{children}</> : null
}

const DesktopAndAbove: FC<MediaQueryComponentProps> = ({ children }) => {
  const isDesktopAndAbove = useIsDesktopAndAbove()

  return isDesktopAndAbove ? <>{children}</> : null
}

const Desktop: FC<MediaQueryComponentProps> = ({ children }) => {
  const isDesktop = useIsDesktop()

  return isDesktop ? <>{children}</> : null
}

const DesktopAndBelow: FC<MediaQueryComponentProps> = ({ children }) => {
  const isDesktopAndBelow = useIsDesktopAndBelow()

  return isDesktopAndBelow ? <>{children}</> : null
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

export {
  LargeDesktopAndAbove,
  LargeDesktop,
  LargeDesktopAndBelow,
  DesktopAndAbove,
  Desktop,
  DesktopAndBelow,
  Mobile,
  Tablet,
  TabletAndAbove,
  TabletAndBelow,
}
export { Media } from './Media'
export * from './hooks'
