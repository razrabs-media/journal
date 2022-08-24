import type { Theme } from '@emotion/react'
import { ThemeName } from '@razrabs-ui/theme'

import { common } from '../common'
import { FallbackSquare } from './components/FallbackSquare'
import { FallbackX } from './components/FallbackX'

// TODO: Функция, чтобы прокидывать тему в создаваемые темы компонентов
// Пример:
// theme/index.ts:
// const themeLight = extendTheme({...custom}, components)
//
// theme/component/fallback-square.ts
// const FallbackSquare = (theme) => {color: theme.colors.primary}
//
// result = { color: { ...someColor }, component: { FallbackSquare: { color: '#1D1D21' } } }
export const themeLight: Theme = {
  name: ThemeName.Light,
  colors: {
    logo: '#000',

    primary: '#1D1D21',
    contrastPrimary: '#E2E2E8',

    secondary: 'rgba(29,29,33,0.6)',
    contrastSecondary: '#ECEDF1',

    brand: '#FF9B25',
    background: '#F7F8FC',

    backgroundSecondary: '#ECEDF1',
    contrastBackgroundSecondary: '#ECEDF1',
  },
  components: {
    FallbackSquare,
    FallbackX,
  },
  ...common,
}
