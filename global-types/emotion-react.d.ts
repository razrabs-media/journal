import '@emotion/react'
import { ThemeName } from 'shared/lib/theme'

declare module '@emotion/react' {
    export interface Theme {
        name: ThemeName
        colors: {
            primary: {
                main: string
                alt: string
                contrast: string
                rare: string
            }
            secondary: {
                main: string
                alt: string
                contrast: string
                rare: string
            }
            background: string
        }
    }
}
