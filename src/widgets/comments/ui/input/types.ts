export type CommentData = {
  replyUid?: string
  content: string
}

export type Props = {
  replyUid?: string
  onReplyCancel: VoidFunction
  avatarUrl: string
  onSend?: (contentData: CommentData) => Promise<void>
}
