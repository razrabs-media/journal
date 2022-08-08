import { useTheme } from '@emotion/react'
import { useIsMobile } from '@razrabs-ui/responsive'
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
        <IconButton onClick={toggleTheme}>
          <ThemeIcon />
        </IconButton>
      ) : (
        <>
          <ThemeButton disabled={theme.name === 'light'} onClick={toggleTheme}>
            День
          </ThemeButton>
          <Separator>/</Separator>
          <ThemeButton disabled={theme.name === 'dark'} onClick={toggleTheme}>
            Ночь
          </ThemeButton>
        </>
      )}
    </Container>
  )
}
