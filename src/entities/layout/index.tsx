import { FC, PropsWithChildren } from 'react'
import { Drawer, MainGrid, Wrapper } from 'shared/ui'
// TODO: Нужно пофиксить импорты
// eslint-disable-next-line boundaries/element-types
import { useContextComments } from '../comments'
import { Props } from './types'

export const Layout: FC<PropsWithChildren<Props>> = ({
  children,
  drawerContent,
}) => {
  const { opened } = useContextComments()

  return (
    <Wrapper open={opened}>
      <MainGrid>{children}</MainGrid>

      {opened && <Drawer open={opened}>{drawerContent}</Drawer>}
    </Wrapper>
  )
}
