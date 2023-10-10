import type { FC } from 'react'
import { Badge } from 'shared/ui'

type ChiefBadgeProps = {
  wide?: boolean
  className?: string
}
export const ChiefBadge: FC<ChiefBadgeProps> = (props) => (
  <Badge color='brand' {...props}>
    От главреда
  </Badge>
)
