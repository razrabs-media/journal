import { useTheme } from '@emotion/react'
import Image from '@razrabs-ui/image'
import Typography from '@razrabs-ui/typography'
import { forwardRef } from 'react'
import {
  FirstRow,
  ReplyContent,
  RowsWrapper,
  SecondRow,
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
  ({ as, className, avatar, author, time, content, replyContent }, ref) => (
    <StyledComment as={as} className={className} ref={ref}>
      <Image alt={author} h={40} src={avatar} w={40} />

      <RowsWrapper>
        <FirstRow>
          <Typography uppercase letterSpacing={1} size='sm'>
            {author}
          </Typography>

          <Typography uppercase color='secondary' letterSpacing={1} size='sm'>
            {time}
          </Typography>
        </FirstRow>

        {replyContent && (
          <SecondRow>
            <ReplyIcon />

            <ReplyContent as='span' color='secondary' size='md'>
              {replyContent}
            </ReplyContent>
          </SecondRow>
        )}

        <Typography size='md'>{content}</Typography>
      </RowsWrapper>
    </StyledComment>
  ),
)

Comment.displayName = 'Comment'

export default Comment
