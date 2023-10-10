import { Theme } from '@emotion/react'
import { themeDark, themeLight } from 'shared/ui/theme'

export const invertedThemeByCurrentThemeName: Record<string, Theme> = {
  [themeDark.name]: themeLight,
  [themeLight.name]: themeDark,
}
