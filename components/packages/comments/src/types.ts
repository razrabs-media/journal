import { ElementType } from 'react'

export type CommentProps = {
  as?: ElementType
  className?: string
  avatar?: string
  author: string
  time: string
  content: string
  replyContent?: string
}
