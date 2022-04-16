import { ThemeName } from './index'

declare module '@emotion/react' {
  export interface Theme {
    name: ThemeName
    colors: {
      logo: string
      text: {
        primary: string
        secondary: string
      }
      tag: string
      accent: string
      accentText: string
      background: string
    }
  }
}
