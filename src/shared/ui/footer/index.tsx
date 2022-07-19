import Typography from '@razrabs-ui/typography'
import Link from 'next/link'
import { FC } from 'react'
import {
  Content,
  Copyright,
  Logo,
  Menu,
  MoreLabel,
  Share,
  StyledFooter,
  StyledNav,
} from './styled'
import { useResizeWidth } from './useResizeWidth'

export const Footer: FC = () => {
  useResizeWidth()

  return (
    <StyledFooter>
      <Content>
        <Copyright>
          <Typography uppercase color='secondary' letterSpacing='1px' size='sm'>
            In code we trust since 2022
          </Typography>
        </Copyright>
        <Menu>
          <StyledNav>
            <Link passHref href='#'>
              <Typography uppercase letterSpacing='1px' size='sm'>
                о нас
              </Typography>
            </Link>
            <Link passHref href='#'>
              <Typography uppercase letterSpacing='1px' size='sm'>
                условия
              </Typography>
            </Link>
            <Link passHref href='#'>
              <Typography uppercase letterSpacing='1px' size='sm'>
                лицензия
              </Typography>
            </Link>
            <Link passHref href='#'>
              <Typography uppercase letterSpacing='1px' size='sm'>
                связаться
              </Typography>
            </Link>
          </StyledNav>
          <Share>
            <MoreLabel
              uppercase
              color='secondary'
              letterSpacing='1px'
              size='sm'
            >
              еще и тут:
            </MoreLabel>
            <Link passHref href='#'>
              <Typography uppercase letterSpacing='1px' size='sm'>
                github
              </Typography>
            </Link>
            <Link passHref href='#'>
              <Typography uppercase letterSpacing='1px' size='sm'>
                yt
              </Typography>
            </Link>
            <Link passHref href='#'>
              <Typography uppercase letterSpacing='1px' size='sm'>
                tg
              </Typography>
            </Link>
            <Link passHref href='#'>
              <Typography uppercase letterSpacing='1px' size='sm'>
                tw
              </Typography>
            </Link>
          </Share>
        </Menu>
      </Content>
      <Logo id='logo'>Разрабы</Logo>
    </StyledFooter>
  )
}
