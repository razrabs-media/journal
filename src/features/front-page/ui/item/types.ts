import { ElementType } from 'react'
import { PostOnFrontPage } from 'shared/api'

export type Position = {
  x: number
  y: number
  w: number
  h: number
}

export type Props = Position & {
  as?: ElementType

  variant: string
  postProps: Partial<PostOnFrontPage['post']>
}
