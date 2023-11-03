import { FC, PropsWithChildren } from 'react'

import { DrawerBlock } from './styled'
import { Props } from './types'

export const Drawer: FC<PropsWithChildren<Props>> = ({ children, open }) => (
  <DrawerBlock open={open}>{children}</DrawerBlock>
)
