import Typography from '@razrabs-ui/typography'
import Link from 'next/link'
import { FC } from 'react'
import { useResizeWidth } from './hooks'
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
            <Link passHref href='/post/3c6bcea4-c34a-4650-907a-bca8dd72a310'>
              <Typography uppercase as='a' letterSpacing='1px' size='sm'>
                О нас
              </Typography>
            </Link>

            <Link passHref href='mailto:razrabschannel@razrabs.ru'>
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
            <Link passHref href='https://github.com/razrabs-media'>
              <Typography
                uppercase
                as='a'
                letterSpacing='1px'
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                rel='noreferrer'
                size='sm'
                target='_blank'
              >
                Github
              </Typography>
            </Link>
            <Link
              passHref
              href='https://www.youtube.com/channel/UC-h5nFU9Qzo72dFW-fC_lkQ'
            >
              <Typography
                uppercase
                as='a'
                letterSpacing='1px'
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                rel='noreferrer'
                size='sm'
                target='_blank'
              >
                YT
              </Typography>
            </Link>
            <Link passHref href='https://t.me/rzrbs'>
              <Typography
                uppercase
                as='a'
                letterSpacing='1px'
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                rel='noreferrer'
                size='sm'
                target='_blank'
              >
                TG
              </Typography>
            </Link>
            <Link passHref href='https://twitter.com/razraby'>
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
