import { addDecorator } from '@storybook/react'
import { withThemes } from '@react-theming/storybook-addon'
import { ThemeProvider } from '@emotion/react'
import { themeDark, themeLight } from '@razrabs-ui/theme'
import { Media } from '@razrabs-ui/responsive'

import './styles.css'
import styled from '@emotion/styled'

// Провайдер тем
// Storybook >= 6.4.0 – withThemes ломает страницу при взаимодействии с контролами
// https://github.com/react-theming/storybook-addon/issues/45
const onThemeSwitch = (context) => {
  const { theme } = context
  const background = theme.colors.background ?? 'white'

  return {
    parameters: {
      backgrounds: {
        default: background,
      },
    },
  }
}
const themes = [themeLight, themeDark]
addDecorator(withThemes(ThemeProvider, themes, { onThemeSwitch }))

// Провайдер паддингов
const StyledBody = styled.div`
  padding: 24px;

  ${Media.mobile} {
    padding: 10px;
  }
`
const withPaddings = (Story) => (
  <StyledBody>
    <Story />
  </StyledBody>
)
addDecorator(withPaddings)

//Кастомные вьюпорты с макетов
const customViewports = {
  desktopLarge: {
    name: 'desktopLarge',
    styles: {
      width: '1920px',
      height: '100%',
    },
  },
  desktopSmall: {
    name: 'desktopSmall',
    styles: {
      width: '1320px',
      height: '100%',
    },
  },
  tabletLarge: {
    name: 'tabletLarge',
    styles: {
      width: '1319px',
      height: '100%',
    },
  },
  tabletSmall: {
    name: 'tabletSmall',
    styles: {
      width: '672px',
      height: '100%',
    },
  },
  mobileLarge: {
    name: 'mobileLarge',
    styles: {
      width: '671px',
      height: '100%',
    },
  },
  mobileSmall: {
    name: 'mobileSmall',
    styles: {
      width: '375px',
      height: '100%',
    },
  },
}

export const parameters = {
  viewport: {
    viewports: customViewports,
  },
  layout: 'fullscreen',
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
