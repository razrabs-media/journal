import type { Theme } from '@emotion/react'

import { common } from '../common'
import { FallbackSquare } from './components/FallbackSquare'
import { FallbackX } from './components/FallbackX'

export const themeDark: Theme = {
  name: 'dark',
  colors: {
    text: {
      heading: '#E2E2E8',
      regular: '#B7B7BA',
    },

    logo: '#FFF',
    blockquote: '#ceced8',
    primary: '#E2E2E8',
    contrastPrimary: '#1F2025',

    secondary: '#93949A',
    contrastSecondary: '#2B2C2F',

    brand: '#C799E3',
    background: '#201F1F',
    divider: 'rgba(71, 71, 77, 0.5)',
    backgroundSecondary: '#2D2E33',
    contrastBackgroundSecondary: '#38393D',
  },
  components: {
    FallbackSquare,
    FallbackX,
  },
  ...common,
}
