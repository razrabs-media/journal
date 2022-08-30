import { Theme } from '@emotion/react'
import { themeDark, themeLight } from '@razrabs-ui/theme'
import { setCookies } from 'cookies-next'
import { useState } from 'react'

export const useTheme = (
  initialTheme?: Theme['name'],
): [Theme, VoidFunction] => {
  const [theme, setTheme] = useState(
    initialTheme === 'light' ? themeLight : themeDark,
  )

  const toggleTheme = () => {
    const chosenTheme = theme.name === 'light' ? themeDark : themeLight
    setCookies('theme', chosenTheme.name)
    setTheme(chosenTheme)
  }

  return [theme, toggleTheme]
}
