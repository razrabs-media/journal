import { useTheme } from '@emotion/react'
import Image from '@razrabs-ui/image'
import Typography from '@razrabs-ui/typography'
import { forwardRef, MouseEvent } from 'react'
import {
  FirstRow,
  ReplyContent,
  ReplyRow,
  RowsWrapper,
  StyledComment,
} from './styled'
import { CommentProps } from './types'

const ReplyIcon = () => {
  const {
    colors: { secondary },
  } = useTheme()

  return (
    <svg
      fill='none'
      height='16'
      viewBox='0 0 16 16'
      width='16'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.833 11.8327L13.1663 9.49935L10.833 7.16602'
        stroke={secondary}
        strokeLinecap='square'
      />
      <path d='M4.5 2V9.5H13' stroke={secondary} />
    </svg>
  )
}

const Comment = forwardRef<HTMLDivElement, CommentProps>(
  (
    {
      as,
      className,
      uid,
      avatar,
      author,
      time,
      content,
      reply,
      onReplyClick,
      onCommentClick,
    },
    ref,
  ) => {
    const commentClickHandler = () => {
      if (onCommentClick) {
        onCommentClick(uid)
      }
    }

    const replyClickHandler = (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()

      if (reply && onReplyClick) {
        onReplyClick(reply.uid)
      }
    }

    return (
      <StyledComment
        as={as}
        className={className}
        data-comment-uid={uid}
        ref={ref}
        onClick={commentClickHandler}
      >
        <Image alt={author} fit='fill' h={40} src={avatar} w={40} />

        <RowsWrapper>
          <FirstRow>
            <Typography uppercase letterSpacing={1} size='sm'>
              {author}
            </Typography>

            <Typography uppercase color='secondary' letterSpacing={1} size='sm'>
              {time}
            </Typography>
          </FirstRow>

          {reply && (
            <ReplyRow onClick={replyClickHandler}>
              <ReplyIcon />

              <ReplyContent as='span' color='secondary' size='md'>
                {reply.content}
              </ReplyContent>
            </ReplyRow>
          )}

          <Typography size='md'>{content}</Typography>
        </RowsWrapper>
      </StyledComment>
    )
  },
)

Comment.displayName = 'Comment'

export default Comment

export type { ReplyData } from './types'
