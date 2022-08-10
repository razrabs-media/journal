import { Theme } from '@emotion/react'
import { themeDark, themeLight } from '@razrabs-ui/theme'

export const invertedThemeByCurrentThemeName: Record<string, Theme> = {
  [themeDark.name]: themeLight,
  [themeLight.name]: themeDark,
}
