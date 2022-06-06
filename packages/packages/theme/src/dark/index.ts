import type { Theme } from '@emotion/react'

import { common } from '../common'
import { FallbackSquare } from './components/FallbackSquare'
import { FallbackX } from './components/FallbackX'

export const themeDark: Theme = {
  name: 'dark',
  colors: {
    logo: '#FFF',

    primary: '#E2E2E8',
    contrastPrimary: '#1F2025',

    secondary: '#93949A',
    contrastSecondary: '#2B2C2F',

    brand: '#C799E3',
    background: '#1F2025',
  },
  components: {
    FallbackSquare,
    FallbackX,
  },
  ...common,
}
