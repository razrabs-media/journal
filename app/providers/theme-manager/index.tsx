import { ThemeProvider } from '@emotion/react'
import { FC, ReactNode } from 'react'
import { useLocalStorage } from 'shared/lib/hooks'
import { ThemeData, ThemeName } from 'shared/lib/theme'
import { ThemeManagerContext } from './context'

type Props = {
    children?: ReactNode
}

export const ThemeManagerProvider: FC<Props> = ({ children }) => {
    const [name, setName] = useLocalStorage(ThemeName.light, 'theme')
    return (
        <ThemeManagerContext.Provider
            value={{
                name,
                setTheme: setName,
            }}
        >
            <ThemeProvider
                theme={name === 'light' ? ThemeData.light : ThemeData.dark}
            >
                {children}
            </ThemeProvider>
        </ThemeManagerContext.Provider>
    )
}
export { useSetTheme } from './context'
