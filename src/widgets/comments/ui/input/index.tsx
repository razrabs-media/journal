import Image from '@razrabs-ui/image'
import type { ChangeEvent, FC, KeyboardEvent } from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ReplyPreview } from 'widgets/comments/ui/reply-preview'
import { useContextComments } from 'entities/comments'
import { SendIcon } from 'shared/ui'
import { Input, StyledCommentInput, StyledSendButton } from './styled'
import { Props } from './types'

export type { CommentData } from './types'
const INITIAL_TEXTAREA_HEIGHT = 40

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
    target.style.height = INITIAL_TEXTAREA_HEIGHT + 'px'

    // TODO: very tricky способ. надо делать свой textarea
    if (target.scrollHeight <= INITIAL_TEXTAREA_HEIGHT) {
      target.style.padding = '9px 0'
    } else {
      target.style.padding = '0'
    }

    if (target.value.length && target.scrollHeight > INITIAL_TEXTAREA_HEIGHT) {
      target.style.height = target.scrollHeight + 'px'
    }
  }, [value])

  const { comments } = useContextComments()
  const replyComment = useMemo(
    () => comments?.find((comment) => comment.uid === replyUid),
    [replyUid, comments],
  )

  const handleSubmit = () => {
    if (!textareaRef.current) {
      return
    }

    const content = textareaRef.current.value

    onSend &&
      onSend({ content, replyUid }).then(() => {
        setValue('')
        onReplyCancel()
      })
  }

  const keyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (onSend && e.code === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
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
        <StyledSendButton onClick={handleSubmit}>
          <SendIcon />
        </StyledSendButton>
      </StyledCommentInput>
    </>
  )
}
