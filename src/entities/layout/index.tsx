import { FC, PropsWithChildren } from 'react'
// TODO: Нужно пофиксить импорты
// eslint-disable-next-line boundaries/element-types
import { useContextComments } from 'entities/comments'
import { Drawer, MainGrid, Wrapper } from 'shared/ui'
import { useIsTabletAndBelow } from 'shared/ui/theme/responsive'
import { Props } from './types'

export const Layout: FC<PropsWithChildren<Props>> = ({
  children,
  drawerContent,
}) => {
  const tabletAndBelow = useIsTabletAndBelow()
  const { opened } = useContextComments()

  if (!tabletAndBelow) {
    return (
      <Wrapper open={!!drawerContent}>
        <MainGrid>{children}</MainGrid>

        {drawerContent && <Drawer open>{drawerContent}</Drawer>}
      </Wrapper>
    )
  }

  return (
    <Wrapper open={opened}>
      <MainGrid>{children}</MainGrid>

      {drawerContent && <Drawer open={opened}>{drawerContent}</Drawer>}
    </Wrapper>
  )
}
