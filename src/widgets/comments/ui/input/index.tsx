import Image from '@razrabs-ui/image'
import type { ChangeEvent, FC, KeyboardEvent } from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ReplyPreview } from 'widgets/comments/ui/reply-preview'
import { useContextComments } from 'entities/comments'
import { Input, StyledCommentInput } from './styled'
import { Props } from './types'

export type { CommentData } from './types'

export const CommentInput: FC<Props> = ({
  replyUid,
  onReplyCancel,
  avatarUrl,
  onSend,
}) => {
  const [value, setValue] = useState<string>('')

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const target = textareaRef.current

    if (!target) {
      return
    }

    // TODO: very tricky способ. надо делать свой textarea
    if (!target.value.length) {
      target.style.padding = '9px 0'
    } else {
      target.style.padding = '0'
    }

    target.style.height = '40px'

    if (target.value.length) {
      target.style.height = target.scrollHeight + 'px'
    }
  }, [value])

  const { comments } = useContextComments()
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
          ref={textareaRef}
          value={value}
          onChange={handleInput}
          onKeyDown={keyDownHandler}
        />
      </StyledCommentInput>
    </>
  )
}
