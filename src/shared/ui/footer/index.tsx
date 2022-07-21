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
              <Typography uppercase as='a' letterSpacing='1px' size='sm'>
                О нас
              </Typography>
            </Link>
            <Link passHref href='#'>
              <Typography uppercase as='a' letterSpacing='1px' size='sm'>
                Условия
              </Typography>
            </Link>
            <Link passHref href='#'>
              <Typography uppercase as='a' letterSpacing='1px' size='sm'>
                Лицензия
              </Typography>
            </Link>
            <Link passHref href='#'>
              <Typography uppercase as='a' letterSpacing='1px' size='sm'>
                Связаться
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
              Еще и тут:
            </MoreLabel>
            <Link passHref href='#'>
              <Typography uppercase as='a' letterSpacing='1px' size='sm'>
                GitHub
              </Typography>
            </Link>
            <Link passHref href='#'>
              <Typography uppercase as='a' letterSpacing='1px' size='sm'>
                YT
              </Typography>
            </Link>
            <Link passHref href='#'>
              <Typography uppercase as='a' letterSpacing='1px' size='sm'>
                TG
              </Typography>
            </Link>
            <Link passHref href='#'>
              <Typography uppercase as='a' letterSpacing='1px' size='sm'>
                TW
              </Typography>
            </Link>
          </Share>
        </Menu>
      </Content>
      <Logo id='logo'>Разрабы</Logo>
    </StyledFooter>
  )
}
