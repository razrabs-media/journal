import { VFC } from 'react'
import { PostCardProps } from 'entities/posts'
import { CurrentFrontPage } from '../model'

export type Props = {
  frontPage: CurrentFrontPage['currentFrontPage']
  PostCardComponent?: VFC<PostCardProps>
}
