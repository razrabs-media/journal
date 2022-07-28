import Clock from '@razrabs-ui/clock'
import { useIsTabletAndAbove } from '@razrabs-ui/responsive'
import Typography from '@razrabs-ui/typography'
import Link from 'next/link'
import { FC } from 'react'
import { Auth } from 'features/auth'
import { CurrentTime } from 'entities/clock'
import { useBoolean, useEscape } from 'shared/lib'
import { Preferences } from '../preferences'
import { LogoBlock, StyledHeader } from './styled'

type Props = {
  currentTime: CurrentTime['currentTime']
}

export const Header: FC<Props> = ({ currentTime }) => {
  const [open, { trusty, falsy }] = useBoolean()
  const ref = useEscape<HTMLDivElement>(falsy)

  return (
    <StyledHeader>
      {useIsTabletAndAbove() ? <Clock currentTime={currentTime} /> : <div />}
      <LogoBlock>
        <Link passHref href='/'>
          <Typography
            disableHover
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
