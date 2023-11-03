import { FC, PropsWithChildren } from 'react'
// TODO: Нужно пофиксить импорты
// eslint-disable-next-line boundaries/element-types
import { useContextComments } from 'entities/comments'
import { Drawer, MainGrid, Wrapper } from 'shared/ui'
import { Props } from './types'

export const Layout: FC<PropsWithChildren<Props>> = ({
  children,
  drawerContent,
}) => {
  const { opened } = useContextComments()

  return (
    <Wrapper>
      <MainGrid>{children}</MainGrid>

      {drawerContent && <Drawer open={opened}>{drawerContent}</Drawer>}
    </Wrapper>
  )
}
