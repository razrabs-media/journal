import { FC } from 'react'
import { useSyncScroll } from '../../lib/hooks/useSyncScroll'
import { ScrollBody, ScrollWrapper } from './styled'

export const Scroll: FC = () => {
  useSyncScroll()

  return (
    <ScrollWrapper>
      <ScrollBody id='scroll' />
    </ScrollWrapper>
  )
}
