import { ElementType } from 'react'

export type CommentProps = {
  as?: ElementType
  className?: string
  uid: string
  avatar?: string
  author: string
  time: string
  content: string

  reply?: {
    uid: string
    content: string
  } | null
  onReplyClick?: (commentUid: string) => void

  onCommentClick?: (commentUid: string) => void
}
