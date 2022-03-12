import { HeaderRight } from './styles/HeaderRight'
import { LinkList } from './styles/LinkList'
import { NavHeader } from './headerNav/HederItem'
import React, { FC } from 'react'
import { useTheme } from '@emotion/react'
import { Typography } from 'shared/ui/typography'
import { LinkItem } from './links/LinkItem'
import { ThemeSwitch } from './ThemeSwitch'
import { SubHeader } from './sub-header'

export const Header: FC = () => {
  const theme = useTheme()
  return (
    <>
      <LinkList color={theme.colors.primary.contrast}>
        <NavHeader />
        <Typography
          uppercase
          color='contrast'
          letterSpacing='wide'
          size='large'
          weight='bold'
        >
          разрабы
        </Typography>
        <HeaderRight>
          <ThemeSwitch />
          <LinkItem link='акк' />
        </HeaderRight>
      </LinkList>
      <SubHeader />
    </>
  )
}
