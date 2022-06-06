import Typography from '@razrabs-ui/typography'
import type { ElementType, FC, ReactNode } from 'react'

type Props = {
  children?: ReactNode
  as?: ElementType
}
export const MenuItem: FC<Props> = ({ children, ...restProps }) => (
  <Typography {...restProps}>{children}</Typography>
)
