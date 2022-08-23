import { useIsMobile } from '@razrabs-ui/responsive'
import { FC } from 'react'
import { useCurrentUserLazyQuery } from 'features/auth'
import { useClientSide } from 'shared/lib'
import { EnterIcon, IconButton } from 'shared/ui'
import { ThemeToggler } from '../themeToggler'
import { AccountBadge, AuthButton, PreferencesBox } from './styled'
import { Props } from './types'
import { getFormattedNameForAccountBadge } from './utils'

export const Preferences: FC<Props> = ({ onClick, toggleTheme }) => {
  const [currentUserQuery, { data }] = useCurrentUserLazyQuery({
    errorPolicy: 'all',
  })
  const isMobile = useIsMobile()
  useClientSide(currentUserQuery)

  const TypeButton = data?.currentUser
    ? AccountBadge
    : isMobile
    ? IconButton
    : AuthButton

  const fullName = data?.currentUser?.profile?.fullName

  const title = fullName ? (
    getFormattedNameForAccountBadge(fullName)
  ) : isMobile ? (
    <EnterIcon />
  ) : (
    'Акк'
  )

  return (
    <PreferencesBox>
      <ThemeToggler toggleTheme={toggleTheme} />
      <TypeButton
        aria-label='Личный кабинет'
        as='button'
        role='button'
        onClick={onClick}
      >
        {title}
      </TypeButton>
    </PreferencesBox>
  )
}
