import { Theme } from '@emotion/react'
import { setCookie } from 'cookies-next'
import { useState } from 'react'
import { themeDark, themeLight } from 'shared/ui/theme'

export const useTheme = (
  initialTheme?: Theme['name'],
): [Theme, VoidFunction] => {
  const [theme, setTheme] = useState(
    initialTheme === 'light' ? themeLight : themeDark,
  )

  const toggleTheme = () => {
    const chosenTheme = theme.name === 'light' ? themeDark : themeLight
    setCookie('theme', chosenTheme.name)
    setTheme(chosenTheme)
  }

  return [theme, toggleTheme]
}
