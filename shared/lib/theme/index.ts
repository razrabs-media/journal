import { Theme } from '@emotion/react'
import { darkTheme } from './dark'
import { lightTheme } from './light'
import { ThemeName } from './theme-name'

export const ThemeData: Record<ThemeName, Theme> = {
  [ThemeName.light]: lightTheme,
  [ThemeName.dark]: darkTheme,
}
export { ThemeName } from './theme-name'
