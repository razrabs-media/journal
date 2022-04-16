import { Theme } from '@emotion/react'
import { ThemeName } from '../theme-names'

export const darkTheme: Theme = {
  name: ThemeName.Dark,
  colors: {
    logo: '#FFFFFF',
    text: {
      primary: '#E2E2E8',
      secondary: '#93949A',
    },
    tag: '#2B2C2F',
    accent: '#C799E3',
    accentText: '#1D1D21',
    background: '#1F2025',
  },
}
