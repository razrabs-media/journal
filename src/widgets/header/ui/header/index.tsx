import Typography from '@razrabs-ui/typography'
import Link from 'next/link'
import { FC } from 'react'
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
          color='logo'
          letterSpacing={3}
          size='xl'
          weight='bold'
        >
          Разрабы
        </Typography>
      </Link>
    </LogoBlock>

    <PreferencesBlock />
  </StyledHeader>
)
