import Image from '@razrabs-ui/image'
import type { ChangeEvent, FC, KeyboardEvent } from 'react'
import { useMemo, useState } from 'react'
import { ReplyPreview } from 'widgets/comments/ui/reply-preview'
import { useComments } from 'entities/comments'
import { Input, StyledCommentInput } from './styled'

export type CommentData = {
  replyUid?: string
  content: string
}

type Props = {
  replyUid?: string
  onReplyCancel: () => void

  avatarUrl: string
  onSend?: (contentData: CommentData) => Promise<void>
}

export const CommentInput: FC<Props> = ({
  replyUid,
  onReplyCancel,
  avatarUrl,
  onSend,
}) => {
  const [value, setValue] = useState<string>('')

  const { comments } = useComments()
  const replyComment = useMemo(
    () => comments?.find((comment) => comment.uid === replyUid),
    [replyUid, comments],
  )

  const keyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (onSend && e.code === 'Enter' && !e.shiftKey) {
      e.preventDefault()

      const content = e.currentTarget.value

      onSend({ content, replyUid }).then(() => {
        setValue('')
        onReplyCancel()
      })
    }
  }

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value.substring(0, 255))
  }

  return (
    <>
      {replyComment && (
        <ReplyPreview
          avatarUrl={replyComment.author.avatarUrl ?? ''}
          content={replyComment.content}
          onReplyCancel={onReplyCancel}
        />
      )}
      <StyledCommentInput>
        <Image alt='Юзер' fit='fill' h={40} src={avatarUrl} w={40} />

        <Input
          placeholder='Написать... (макс. 255 символов)'
          value={value}
          onChange={handleInput}
          onKeyDown={keyDownHandler}
        />
      </StyledCommentInput>
    </>
  )
}
