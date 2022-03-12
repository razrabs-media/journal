import { createContext, Dispatch, useContext } from 'react'
import { ThemeName } from 'shared/lib/theme'

const initialValues = {
    name: ThemeName.light,
    setTheme: {} as Dispatch<ThemeName>,
}

export const ThemeManagerContext = createContext(initialValues)
export const useSetTheme = () => useContext(ThemeManagerContext).setTheme
