import { Theme } from '@emotion/react'
import { ThemeName } from '../theme-names'
import { lightTheme } from './light'
import { darkTheme } from './dark'

export const ThemeData: Readonly<Record<ThemeName, Theme>> = {
  [ThemeName.Dark]: darkTheme,
  [ThemeName.Light]: lightTheme,
}
