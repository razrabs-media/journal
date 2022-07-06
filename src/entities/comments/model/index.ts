export type Comment = {
  uid: string
  author: {
    uid?: string
    avatarUrl?: string
    name: string
  }
  replyComment?: {
    uid: string
    content: string
  } | null
  content: string

  createdAt: string
}

export { CommentsProvider, useComments } from './CommentsProvider'
