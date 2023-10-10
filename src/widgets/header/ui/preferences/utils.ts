import { themeDark, themeLight } from 'shared/ui/theme'

export const accountBadgeColorByTheme: Record<string, string> = {
  [themeDark.name]: themeDark.colors.contrastPrimary,
  [themeLight.name]: themeLight.colors.primary,
}

export const getFormattedNameForAccountBadge = (fullName: string): string => {
  const separatedFullName = fullName.trim().split(' ')

  if (separatedFullName.length === 1) {
    return separatedFullName[0].slice(0, 2)
  }

  return separatedFullName
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
}
