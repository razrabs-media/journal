import { themeDark, themeLight } from '@razrabs-ui/theme'

export const accountBadgeColorByTheme: Record<string, string> = {
  [themeDark.name]: themeDark.colors.contrastPrimary,
  [themeLight.name]: themeLight.colors.primary,
}

export const getFormattedNameForAccountBadge = (fullName: string): string => {
  const separatedFullName = fullName.split(' ')

  if (!separatedFullName.length) {
    return ''
  }

  return (
    separatedFullName.length === 1
      ? separatedFullName[0].slice(0, 2)
      : separatedFullName.map((word) => word[0]).join('')
  ).slice(0, 2)
}
