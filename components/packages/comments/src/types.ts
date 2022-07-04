import { ElementType } from 'react'

export type ReplyData = {
  uid: string
  content: string
}

export type CommentProps = {
  as?: ElementType
  className?: string
  uid: string
  avatar?: string
  author: string
  time: string
  content: string

  reply?: ReplyData | null
  onReplyClick?: (commentUid: string) => void

  onCommentClick?: (replyData: ReplyData) => void
}
