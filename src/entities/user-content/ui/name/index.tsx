import Typography from '@razrabs-ui/typography'
import {FC} from 'react'
import {NameWrapper} from './styles'
import {Props} from './types'

export const Name: FC<Props> = ({ name, login }) => (
  <NameWrapper>
    <Typography uppercase size='xl'>
      {name}
    </Typography>
    <Typography uppercase color='secondary' size='sm'>
      {login}
    </Typography>
  </NameWrapper>
)
