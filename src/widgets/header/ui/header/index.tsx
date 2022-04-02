import Link from 'next/link'
import React, { HTMLAttributes, VFC } from 'react'
import { Typography } from 'shared/ui'
import {
  LogoBlock,
  NavigationBlock,
  PreferencesBlock,
  StyledHeader,
} from './styled'

export const Header: VFC<HTMLAttributes<HTMLElement>> = (props) => (
  <StyledHeader {...props}>
    <NavigationBlock />

    <LogoBlock>
      <Link passHref href='/'>
        <Typography
          uppercase
          as='a'
          color='contrast'
          size='medium'
          weight='bold'
        >
          Разрабы
        </Typography>
      </Link>
    </LogoBlock>

    <PreferencesBlock />
  </StyledHeader>
)
