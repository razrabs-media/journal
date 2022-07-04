import Comment, { ReplyData } from '@razrabs-ui/comments'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useCurrentUserLazyQuery } from 'features/auth'
import { useComments } from 'entities/comments'
import { useClientSide, useDisplayAnimation } from 'shared/lib'
import { parseDate } from 'shared/lib/parse-date'
import { CrossIcon, IconButton, StickyGridArea } from 'shared/ui'

import { CommentsEmpty } from './comments-empty'
import { Drawer } from './drawer'
import { CommentData, CommentInput } from './input'
import {
  CommentsAction,
  CommentsAmount,
  CommentsContainer,
  CommentsLogin,
  Header,
} from './styled'

const TRANSITION_TIME = 150

export const CommentsWidget = () => {
  const router = useRouter()

  const { opened, comments, closeHandler } = useComments()

  const [currentUserQuery, { data }] = useCurrentUserLazyQuery({
    errorPolicy: 'all',
  })
  useClientSide(currentUserQuery)

  const [replyData, setReplyData] = useState<ReplyData | undefined>(undefined)

  const { display, animationIn, animationOut } = useDisplayAnimation(
    opened,
    TRANSITION_TIME,
  )

  const onCommentClick = (replyData: ReplyData) => {
    setReplyData(replyData)
  }

  const onReplyClick = (commentUid: string) => {
    const commentElement = document.querySelector(
      `[data-comment-uid="${commentUid}"]`,
    )

    commentElement?.scrollIntoView()
  }

  const onCommentSend = (commentData: CommentData) => {
    alert(JSON.stringify(commentData))
  }

  return (
    <Drawer
      animationIn={animationIn}
      animationOut={animationOut}
      shouldDisplay={display}
      transitionTime={TRANSITION_TIME}
    >
      <StickyGridArea area='header'>
        <Header>
          <CommentsAmount>Комменты: {comments?.length}</CommentsAmount>

          <IconButton color='primary' onClick={closeHandler}>
            <CrossIcon />
          </IconButton>
        </Header>
      </StickyGridArea>

      <CommentsContainer area='content'>
        {comments?.length ? (
          comments.map((comment) => {
            const { replyComment: reply } = comment

            return (
              <Comment
                key={comment.uid}
                author={comment.author.name}
                avatar={comment.author.avatarUrl}
                content={comment.content}
                reply={reply}
                time={parseDate(comment.createdAt) ?? ''}
                uid={comment.uid}
                onCommentClick={onCommentClick}
                onReplyClick={onReplyClick}
              />
            )
          })
        ) : (
          <CommentsEmpty />
        )}
      </CommentsContainer>

      <CommentsAction area='action'>
        {data?.currentUser ? (
          <CommentInput
            avatarUrl={data?.currentUser.profile?.avatarUrl ?? ''}
            replyData={replyData}
            onSend={onCommentSend}
          />
        ) : (
          <CommentsLogin
            icon='right'
            onClick={() => router.push('/auth/github')}
          >
            Залогиниться через GitHub
          </CommentsLogin>
        )}
      </CommentsAction>
    </Drawer>
  )
}
