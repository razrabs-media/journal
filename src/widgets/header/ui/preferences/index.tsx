import { useIsTabletAndBelow } from '@razrabs-ui/responsive'
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
  const tabletAndBelow = useIsTabletAndBelow()
  useClientSide(currentUserQuery)

  const TypeButton = data?.currentUser
    ? AccountBadge
    : tabletAndBelow
    ? IconButton
    : AuthButton

  const fullName = data?.currentUser?.profile?.fullName

  const title = fullName ? (
    fullName.slice(0, 2)
  ) : tabletAndBelow ? (
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
