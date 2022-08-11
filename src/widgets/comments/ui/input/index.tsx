import Image from '@razrabs-ui/image'
import type { ChangeEvent, FC, KeyboardEvent } from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ReplyPreview } from 'widgets/comments/ui/reply-preview'
import { useContextComments } from 'entities/comments'
import {
  Input,
  StyledCommentInput,
  StyledSendButton,
  StyledSendIcon,
} from './styled'
import { Props } from './types'

export type { CommentData } from './types'
const DEFAULT_TEXTAREA_HEIGHT = 40

export const CommentInput: FC<Props> = ({
  replyUid,
  onReplyCancel,
  avatarUrl,
  onSend,
}) => {
  const [value, setValue] = useState<string>('')
  const [isSendingComment, setIsSendingComment] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const target = textareaRef.current

    if (!target) {
      return
    }
    // TODO: very tricky способ. надо делать свой textarea
    target.style.height = DEFAULT_TEXTAREA_HEIGHT + 'px'
    target.style.padding = '9px 0'

    if (target.scrollHeight > target.clientHeight) {
      target.style.padding = '0px'
    }

    if (target.scrollHeight) {
      target.style.height = target.scrollHeight + 'px'
    } else {
      target.style.height = DEFAULT_TEXTAREA_HEIGHT + 'px'
    }
  })

  const { comments } = useContextComments()
  const replyComment = useMemo(
    () => comments?.find((comment) => comment.uid === replyUid),
    [replyUid, comments],
  )

  const handleSubmit = () => {
    if (!textareaRef.current) {
      return
    }

    const content = textareaRef.current.value.trim()

    if (!content) {
      return
    }

    if (onSend && !isSendingComment) {
      setIsSendingComment(true)
      onSend({ content, replyUid })
        .then(() => {
          setValue('')
          onReplyCancel()
        })
        .finally(() => {
          setIsSendingComment(false)
        })
    }
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

        <StyledSendButton hide={!value} onClick={handleSubmit}>
          <StyledSendIcon />
        </StyledSendButton>
      </StyledCommentInput>
    </>
  )
}
