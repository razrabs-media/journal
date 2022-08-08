import { themeDark } from '@razrabs-ui/theme'

const ThemesCommonBreakpoints = themeDark.breakpoints

export const Media = {
  largeDesktopAndAbove: `@media screen and (min-width: ${ThemesCommonBreakpoints.lg})`,
  largeDesktop: `@media screen and (min-width: ${
    ThemesCommonBreakpoints.lg
  }) and (max-width: ${parseInt(ThemesCommonBreakpoints.xl) - 1}px)`,
  largeDesktopAndBelow: `@media screen and (max-width: ${
    parseInt(ThemesCommonBreakpoints.xl) - 1
  }px)`,

  desktopAndAbove: `@media screen and (min-width: ${ThemesCommonBreakpoints.md})`,
  desktop: `@media screen and (min-width: ${
    ThemesCommonBreakpoints.md
  }) and (max-width: ${parseInt(ThemesCommonBreakpoints.lg) - 1}px)`,
  desktopAndBelow: `@media screen and (max-width: ${
    parseInt(ThemesCommonBreakpoints.lg) - 1
  }px)`,

  tabletAndAbove: `@media screen and (min-width: ${ThemesCommonBreakpoints.sm})`,
  tablet: `@media screen and (min-width: ${
    ThemesCommonBreakpoints.sm
  }) and (max-width: ${parseInt(ThemesCommonBreakpoints.md) - 1}px)`,
  tabletAndBelow: `@media screen and (max-width: ${
    parseInt(ThemesCommonBreakpoints.md) - 1
  }px)`,

  mobile: `@media screen and (max-width: ${
    parseInt(ThemesCommonBreakpoints.sm) - 1
  }px)`,
}

export default Media
