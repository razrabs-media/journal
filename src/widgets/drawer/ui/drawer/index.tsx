import { FC, PropsWithChildren } from 'react'
import { useContextComments } from 'entities/comments'
import { DrawerGrid } from './styled'

export const Drawer: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { opened } = useContextComments()
  return <DrawerGrid open={opened}>{children}</DrawerGrid>
}
