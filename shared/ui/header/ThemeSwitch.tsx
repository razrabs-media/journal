import { useTheme } from '@emotion/react'
import { useSetTheme } from 'app/providers/theme-manager'
import React, { FC } from 'react'
import { ThemeName } from 'shared/lib/theme'
import { Typography } from 'shared/ui/typography'
import { Button } from './styles/Button'
import { LeftPadding } from './styles/LeftPadding'

export const ThemeSwitch: FC = () => {
  const theme = useTheme()
  const setTheme = useSetTheme()
  const colorAlt = theme.name === ThemeName.light ? 'alt' : 'main'
  const colorMain = theme.name === ThemeName.light ? 'main' : 'alt'
  return (
    <LeftPadding>
      <Button onClick={() => setTheme(ThemeName.light)}>
        <Typography uppercase color={colorAlt} colorVariant='primary'>
          день
        </Typography>
      </Button>
      <span>
        <Typography as='p' color={colorAlt} colorVariant='primary'>
          /
        </Typography>
      </span>
      <Button onClick={() => setTheme(ThemeName.dark)}>
        <Typography uppercase color={colorMain} colorVariant='primary'>
          ночь
        </Typography>
      </Button>
    </LeftPadding>
  )
}
