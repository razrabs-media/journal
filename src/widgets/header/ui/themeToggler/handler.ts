import { Theme } from '@emotion/react'
import { ThemeName } from '@razrabs-ui/theme'
import { themeDark, themeLight } from '@razrabs-ui/theme'
import { setCookies } from 'cookies-next'
import { useState } from 'react'

export const useTheme = (
  initialTheme?: Theme['name'],
): [Theme, VoidFunction] => {
  const [theme, setTheme] = useState(
    initialTheme === ThemeName.Light ? themeLight : themeDark,
  )

  const toggleTheme = () => {
    const choosenTheme = theme.name === ThemeName.Light ? themeDark : themeLight
    setCookies('theme', choosenTheme.name)
    setTheme(choosenTheme)
  }

  return [theme, toggleTheme]
}
