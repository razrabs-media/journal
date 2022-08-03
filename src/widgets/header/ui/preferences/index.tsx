import { useIsMobile } from '@razrabs-ui/responsive'
import { FC } from 'react'
import { useCurrentUserLazyQuery } from 'features/auth'
import { useClientSide } from 'shared/lib'
import { EnterIcon, IconButton } from 'shared/ui'
import { AccountBadge, AuthButton, PreferencesBox } from './styled'
import { Props } from './types'

export const Preferences: FC<Props> = ({ onClick }) => {
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
    fullName
      .split(' ')
      .map((word) => word[0])
      .join('')
  ) : isMobile ? (
    <EnterIcon />
  ) : (
    'Акк'
  )

  return (
    <PreferencesBox>
      <TypeButton as='button' role='button' onClick={onClick}>
        {title}
      </TypeButton>
    </PreferencesBox>
  )
}
