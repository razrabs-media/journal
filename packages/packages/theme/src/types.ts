// TODO: Разделить объявление темы на несколько типов: Breakpoints, Colors и т.д
declare module '@emotion/react' {
  export interface Theme extends Record<string, unknown> {
    name: string
    colors: {
      logo: string

      primary: string
      contrastPrimary: string

      secondary: string
      contrastSecondary: string

      brand: string
      background: string
    }
    breakpoints: {
      sm: string
      md: string
      lg: string
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

export {}
