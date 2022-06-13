import Typography from '@razrabs-ui/typography'
import Link from 'next/link'
import { FC } from 'react'
import {
  Copyright,
  Logo,
  StyledFooter,
  StyledFootMenu,
  StyledMenuBlock,
  StyledNav,
  StyledShareNav,
  StyledText,
} from './styled'

export const Footer: FC = () => (
  <StyledFooter>
    <StyledFootMenu>
      <Copyright>
        <Typography uppercase color='secondary' letterSpacing='1px' size='sm'>
          In code we trust since 2021
        </Typography>
      </Copyright>
      <StyledMenuBlock>
        <StyledNav>
          <Link href='#'>
            <Typography uppercase letterSpacing='1px' size='sm'>
              о нас
            </Typography>
          </Link>
          <Link href='#'>
            <Typography uppercase letterSpacing='1px' size='sm'>
              условия
            </Typography>
          </Link>
          <Link href='#'>
            <Typography uppercase letterSpacing='1px' size='sm'>
              лицензия
            </Typography>
          </Link>
          <Link href='#'>
            <Typography uppercase letterSpacing='1px' size='sm'>
              связаться
            </Typography>
          </Link>
        </StyledNav>
        <StyledShareNav>
          <StyledText>
            <Typography
              uppercase
              color='secondary'
              letterSpacing='1px'
              size='sm'
            >
              еще и тут:
            </Typography>
          </StyledText>
          <Link href='#'>
            <Typography uppercase letterSpacing='1px' size='sm'>
              github
            </Typography>
          </Link>
          <Link href='#'>
            <Typography uppercase letterSpacing='1px' size='sm'>
              yt
            </Typography>
          </Link>
          <Link href='#'>
            <Typography uppercase letterSpacing='1px' size='sm'>
              tg
            </Typography>
          </Link>
          <Link href='#'>
            <Typography uppercase letterSpacing='1px' size='sm'>
              tw
            </Typography>
          </Link>
        </StyledShareNav>
      </StyledMenuBlock>
    </StyledFootMenu>
    <Logo>Разрабы</Logo>
  </StyledFooter>
)
