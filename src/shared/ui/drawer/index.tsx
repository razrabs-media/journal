import { FC, PropsWithChildren } from 'react'
import { useResize } from './hooks'
import { DrawerArea, DrawerBlock } from './styled'
import { Props } from './types'

export const Drawer: FC<PropsWithChildren<Props>> = ({ children, open }) => {
  const [baseRef, changedRef] = useResize()

  return (
    <DrawerArea ref={baseRef}>
      <DrawerBlock open={open} ref={changedRef}>
        {children}
      </DrawerBlock>
    </DrawerArea>
  )
}
