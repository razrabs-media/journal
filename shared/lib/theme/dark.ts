import { Theme } from '@emotion/react'
import { ThemeName } from './theme-name'

export const darkTheme: Theme = {
    name: ThemeName.dark,
    colors: {
        primary: {
            main: '#E2E2E8',
            alt: '#93949A',
            contrast: '#ffffff',
            rare: '#B1B1B4',
        },
        secondary: {
            main: '#C799E3',
            alt: '#C799E3',
            contrast: '#1F2025',
            rare: '#B1B1B4',
        },
        background: '#1F2025',
    },
}
