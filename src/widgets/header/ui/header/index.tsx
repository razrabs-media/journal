import Link from 'next/link'
import { FC } from 'react'
import { Auth } from 'features/auth'
import { CurrentTime } from 'entities/clock'
import { useBoolean, useEscape } from 'shared/lib'
import { Clock } from 'shared/ui'
import { useIsTabletAndAbove } from 'shared/ui/theme/responsive'
import { Typography } from 'shared/ui/typography'
import { Preferences } from '../preferences'
import { LogoBlock, StyledHeader } from './styled'

type Props = {
  currentTime: CurrentTime['currentTime']
  toggleTheme: VoidFunction
}

export const Header: FC<Props> = ({ currentTime, toggleTheme }) => {
  const [open, { trusty, falsy }] = useBoolean()
  const ref = useEscape<HTMLDivElement>(falsy)

  return (
    <StyledHeader>
      {useIsTabletAndAbove() ? <Clock currentTime={currentTime} /> : <div />}
      <LogoBlock>
        <Typography
          disableHover
          uppercase
          as={Link}
          color='logo'
          href='/'
          letterSpacing={3}
          size='xl'
          weight='bold'
        >
          Разрабы
        </Typography>
      </LogoBlock>

      <Preferences toggleTheme={toggleTheme} onClick={trusty} />
      <Auth open={open} ref={ref} onClose={falsy} />
    </StyledHeader>
  )
}
