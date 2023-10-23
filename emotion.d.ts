import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    name: 'light' | 'dark'
    colors: {
      logo: string
      blockquote: string

      primary: strings
      contrastPrimary: string

      secondary: string
      contrastSecondary: string

      brand: string
      background: string

      backgroundSecondary: string
      contrastBackgroundSecondary: string
    }
    breakpoints: {
      sm: string
      md: string
      lg: string
      xl: string
    }
    fontSizes: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
    }
    fontWeights: {
      normal: string
      medium: string
      bold: string
    }
    components: {
      FallbackSquare: {
        color: string
      }
      FallbackX: {
        color: string
      }
    }
  }
}
