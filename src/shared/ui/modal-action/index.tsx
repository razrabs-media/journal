import { FC } from 'react'
import { Typography } from 'shared/ui'
import { Icon } from '..'
import { Action } from './styles'
import { Props } from './types'

export const ModalAction: FC<Props> = ({
  icon,
  open,
  onClick,
  children,
  className,
}) => (
  <Action className={className} tabIndex={open ? 0 : -1} onClick={onClick}>
    <Typography uppercase size='sm'>
      {children}
    </Typography>
    <Icon type={icon} />
  </Action>
)
