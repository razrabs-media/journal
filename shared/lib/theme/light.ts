import { Theme } from '@emotion/react'
import { ThemeName } from './theme-name'

export const lightTheme: Theme = {
  name: ThemeName.light,
  colors: {
    primary: {
      main: '#1D1D21',
      alt: '#636369',
      contrast: '#000000',
      rare: '#636369',
    },
    secondary: {
      main: '#FF9B25',
      alt: '#FF9B25',
      contrast: '#1F2025',
      rare: '#636369',
    },
    background: '#F7F8FC',
  },
}
