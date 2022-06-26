import type { Comment } from '../model'

type BackendComment = {
  __typename: 'CommentItem'
  uid: string
  author: {
    __typename: 'ProfileItem'
    uid?: string | null
    avatarUrl?: string | null
    publicName?: string | null
  }
  replyingToComment?: {
    __typename: 'CommentItem'
    uid: any
    content: string
  } | null
  content: string
  createdAt: any
}

export function commentAdapter(comment: BackendComment): Comment {
  return {
    uid: comment.uid,
    author: {
      uid: comment.author.uid ?? undefined,
      avatarUrl: comment.author.avatarUrl ?? undefined,
      name: comment.author.publicName ?? 'Разраб', // name с бэкэнда может быть undefined?,
    },
    replyComment: comment.replyingToComment,
    content: comment.content,
    createdAt: comment.createdAt,
  }
}
