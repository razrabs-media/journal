import Badge from '@razrabs-ui/badge'
import type { FC } from 'react'

type ChiefBadgeProps = {
  wide?: boolean
  className?: string
}
export const ChiefBadge: FC<ChiefBadgeProps> = (props) => (
  <Badge color='brand' {...props}>
    От главреда
  </Badge>
)
