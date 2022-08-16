import { themeDark, themeLight } from '@razrabs-ui/theme'

export const accountBadgeColorByTheme: Record<string, string> = {
  [themeDark.name]: themeDark.colors.contrastPrimary,
  [themeLight.name]: themeLight.colors.primary,
}
