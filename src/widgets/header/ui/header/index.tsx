import Typography from '@razrabs-ui/typography'
import Link from 'next/link'
import { FC } from 'react'
import { Auth } from 'features/auth'
import { useBoolean, useEscape } from 'shared/lib'
import { Preferences } from '../preferences'
import { LogoBlock, StyledHeader } from './styled'

export const Header: FC = () => {
  const [open, { trusty, falsy }] = useBoolean()
  const ref = useEscape<HTMLDivElement>(falsy)

  return (
    <StyledHeader>
      <div className='dateNow' />
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

      <Preferences onClick={trusty} />
      <Auth open={open} ref={ref} onClose={falsy} />
    </StyledHeader>
  )
}
