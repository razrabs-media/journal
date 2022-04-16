import Link from 'next/link'
import { FC } from 'react'
import { Typography } from 'shared/ui'
import {
  LogoBlock,
  NavigationBlock,
  PreferencesBlock,
  StyledHeader,
} from './styled'

export const Header: FC = () => (
  <StyledHeader>
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
