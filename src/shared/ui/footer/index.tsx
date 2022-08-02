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

const networkLinks = [
  {
    href: 'https://github.com/razrabs-media',
    label: 'Github',
  },
  {
    href: 'https://www.youtube.com/channel/UC-h5nFU9Qzo72dFW-fC_lkQ',
    label: 'YT',
  },
  {
    href: 'https://t.me/rzrbs',
    label: 'TG',
  },
  {
    href: 'https://twitter.com/razraby',
    label: 'TW',
  },
]

export const Footer: FC = () => {
  useResizeWidth()

  return (
    <StyledFooter>
      <Content>
        <Copyright>
          <Typography uppercase color='secondary' letterSpacing='1px' size='sm'>
            Если смысл ни в чем, то в чем?
          </Typography>
        </Copyright>
        <Menu>
          <StyledNav>
            <Link passHref href='/post/3c6bcea4-c34a-4650-907a-bca8dd72a310'>
              <Typography uppercase as='a' letterSpacing='1px' size='sm'>
                О нас
              </Typography>
            </Link>
            <Typography
              uppercase
              as='a'
              href='mailto:razrabschannel@razrabs.ru'
              letterSpacing='1px'
              size='sm'
            >
              Связаться
            </Typography>
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
            {networkLinks.map(({ href, label }) => (
              <Typography
                key={label}
                uppercase
                as='a'
                href={href}
                letterSpacing='1px'
                rel='noreferrer'
                size='sm'
                target='_blank'
              >
                {label}
              </Typography>
            ))}
          </Share>
        </Menu>
      </Content>
      <Logo id='logo'>Разрабы</Logo>
    </StyledFooter>
  )
}
