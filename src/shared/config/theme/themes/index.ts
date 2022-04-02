import { Theme } from '@emotion/react'
import { ThemeName } from '../theme-names'
import { darkTheme } from './dark'
import { lightTheme } from './light'

export const ThemeData: Readonly<Record<ThemeName, Theme>> = {
  [ThemeName.Dark]: darkTheme,
  [ThemeName.Light]: lightTheme,
}
