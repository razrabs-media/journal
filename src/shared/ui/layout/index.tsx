import { FC } from 'react'
import { Content } from './styled'
import { Props } from './types'

export const Layout: FC<Props> = ({ aside, children }) => (
  <Content withAside={!!aside}>
    {aside}
    {children}
  </Content>
)
