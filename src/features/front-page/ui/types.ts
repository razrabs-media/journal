import { FC } from 'react'
import { PostCardProps } from 'entities/posts'
import { CurrentFrontPage } from '../model'

export type Props = {
  frontPage: CurrentFrontPage['currentFrontPage']
  PostCardComponent?: FC<PostCardProps>
}
