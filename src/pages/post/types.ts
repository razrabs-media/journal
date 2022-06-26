import { GetPost } from 'entities/posts'

export type Props = {
  post: GetPost['post']
  commentId: string | null
}
