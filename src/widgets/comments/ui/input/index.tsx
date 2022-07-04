import { ReplyData } from '@razrabs-ui/comments'
import Image from '@razrabs-ui/image'
import type { FC, KeyboardEvent } from 'react'
import { Input, StyledCommentInput } from './styled'

export type CommentData = {
  replyUid?: string
  content: string
}

type Props = {
  replyData?: ReplyData
  onReplyClear?: () => void

  avatarUrl: string
  onSend?: (contentData: CommentData) => void
}

export const CommentInput: FC<Props> = ({ replyData, avatarUrl, onSend }) => {
  const keyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (onSend && e.code === 'Enter' && !e.shiftKey) {
      e.preventDefault()

      const content = e.currentTarget.value

      onSend({ content, replyUid: replyData?.uid })
    }
  }

  return (
    <StyledCommentInput>
      <Image alt='Юзер' fit='fill' h={40} src={avatarUrl} w={40} />

      <Input placeholder='Написать...' onKeyDown={keyDownHandler} />
    </StyledCommentInput>
  )
}
