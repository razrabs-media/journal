import { useTheme } from '@emotion/react'
import { useIsMobile } from '@razrabs-ui/responsive'
import { ThemeName } from '@razrabs-ui/theme'
import { FC } from 'react'
import { IconButton, ThemeIcon } from 'shared/ui'
import { Container, Separator, ThemeButton } from './styled'
import { Props } from './types'

export const ThemeToggler: FC<Props> = ({ toggleTheme }) => {
  const isMobile = useIsMobile()
  const theme = useTheme()
  return (
    <Container>
      {isMobile ? (
        <IconButton aria-label='Переключатель темы' onClick={toggleTheme}>
          <ThemeIcon />
        </IconButton>
      ) : (
        <>
          <ThemeButton
            disabled={theme.name === ThemeName.Light}
            onClick={toggleTheme}
          >
            День
          </ThemeButton>
          <Separator>/</Separator>
          <ThemeButton
            disabled={theme.name === ThemeName.Dark}
            onClick={toggleTheme}
          >
            Ночь
          </ThemeButton>
        </>
      )}
    </Container>
  )
}
