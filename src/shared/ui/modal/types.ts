import {ReactNode} from 'react'

type Position = 'right'

export type Props = {
  title: string
  position?: Position
  content: ReactNode
  action: ReactNode
  hide: boolean
  onClose: VoidFunction
}
