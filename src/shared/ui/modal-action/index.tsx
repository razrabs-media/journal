import Typography from '@razrabs-ui/typography'
import {FC} from 'react'
import {Icon} from '..'
import {Action} from './styles'
import {Props} from './types'

export const ModalAction: FC<Props> = ({ icon, onClick, children }) => (
  <Action as='a' onClick={onClick}>
    <Typography uppercase size='sm'>
      {children}
    </Typography>
    <Icon type={icon} />
  </Action>
)
