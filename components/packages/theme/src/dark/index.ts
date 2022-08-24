import type { Theme } from '@emotion/react'
import { ThemeName } from '@razrabs-ui/theme'

import { common } from '../common'
import { FallbackSquare } from './components/FallbackSquare'
import { FallbackX } from './components/FallbackX'

export const themeDark: Theme = {
  name: ThemeName.Dark,
  colors: {
    logo: '#FFF',

    primary: '#E2E2E8',
    contrastPrimary: '#1F2025',

    secondary: '#93949A',
    contrastSecondary: '#2B2C2F',

    brand: '#C799E3',
    background: '#1F2025',

    backgroundSecondary: '#2D2E33',
    contrastBackgroundSecondary: '#38393D',
  },
  components: {
    FallbackSquare,
    FallbackX,
  },
  ...common,
}
