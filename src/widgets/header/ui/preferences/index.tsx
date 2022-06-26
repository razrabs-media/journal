import {FC} from 'react'
import {useCurrentUserLazyQuery} from 'features/auth'
import {useClientSide} from 'shared/lib'
import {Button, FillButton} from 'shared/ui'
import {PreferencesBox} from './styled'
import {Props} from './types'

export const Preferences: FC<Props> = ({ onClick }) => {
  const [currentUserQuery, { data }] = useCurrentUserLazyQuery({
    errorPolicy: 'all',
  })
  useClientSide(currentUserQuery)

  const TypeButton = data?.currentUser ? FillButton : Button
  const fullName = data?.currentUser?.profile?.fullName
  const title = fullName ? fullName.slice(0, 2) : 'Акк'

  return (
    <PreferencesBox>
      <TypeButton uppercase size='sm' onClick={onClick}>
        {title}
      </TypeButton>
    </PreferencesBox>
  )
}
