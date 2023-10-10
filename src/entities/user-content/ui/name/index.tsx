import { FC } from 'react'
import { Typography } from 'shared/ui'
import { NameWrapper } from './styles'
import { Props } from './types'

export const Name: FC<Props> = ({ name, login }) => (
  <NameWrapper>
    <Typography uppercase size='xl' weight='medium'>
      {name}
    </Typography>
    <Typography uppercase color='secondary' size='sm'>
      {login}
    </Typography>
  </NameWrapper>
)
