import { Theme } from '@emotion/react'
import { ThemeName } from '../theme-names'

export const lightTheme: Theme = {
  name: ThemeName.Light,
  colors: {
    logo: '#000000',
    text: {
      primary: '#1D1D21',
      secondary: '#636369',
    },
    accent: '#FF9B25',
    accentText: '#1D1D21',
    background: '#FFFFFF',
  },
}
