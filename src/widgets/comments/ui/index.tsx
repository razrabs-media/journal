import Comment from '@razrabs-ui/comments'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSendComment } from 'widgets/comments/model'
import { useCurrentUserLazyQuery } from 'features/auth'
import { commentAdapter, useContextComments } from 'entities/comments'
import {
  useClientSide,
  useDisableScroll,
  useDisplayAnimation,
} from 'shared/lib'
import { parseDate } from 'shared/lib/parse-date'
import { CrossIcon, IconButton } from 'shared/ui'
import { CommentsEmpty } from './comments-empty'
import { CommentsWrapper } from './comments-wrapper'
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

  const { opened, postUid, comments, closeHandler } = useContextComments()
  const ref = useDisableScroll(opened)

  const [currentUserQuery, { data }] = useCurrentUserLazyQuery({
    errorPolicy: 'all',
  })
  useClientSide(currentUserQuery)

  const [sendComment] = useSendComment()

  const [replyUid, setReplyUid] = useState<string | undefined>(undefined)

  const { display, animationIn, animationOut } = useDisplayAnimation(
    opened,
    TRANSITION_TIME,
  )

  const onCommentClick = (newReplyUid: string) => {
    setReplyUid(newReplyUid)
  }

  const onScrollToComment = (commentUid: string) => {
    const commentElement = document.querySelector(
      `[data-comment-uid="${commentUid}"]`,
    )

    commentElement?.scrollIntoView()
  }

  const onCommentSend = async (commentData: CommentData) => {
    if (!postUid) {
      return
    }

    const response = await sendComment({
      variables: {
        data: {
          postUid,
          replyingToCommentUid: commentData.replyUid,
          content: commentData.content,
        },
      },
    })

    if (
      response.data?.createComment !== null &&
      response.data?.createComment !== undefined
    ) {
      const newComment = commentAdapter(response.data.createComment)

      // ???????? ??????????????????, ???????? ?????????? ???????????????????? ?????????????????? ?????????? ???????????????????? ????????????
      requestAnimationFrame(() => {
        onScrollToComment(newComment.uid)
      })
    }
  }

  const onReplyCancel = () => {
    setReplyUid(undefined)
  }

  return (
    <CommentsWrapper
      animationIn={animationIn}
      animationOut={animationOut}
      ref={ref}
      shouldDisplay={display}
      transitionTime={TRANSITION_TIME}
    >
      <Header>
        <CommentsAmount>????????????????: {comments?.length}</CommentsAmount>

        <IconButton color='primary' onClick={closeHandler}>
          <CrossIcon />
        </IconButton>
      </Header>

      {comments.length ? (
        <CommentsContainer>
          {comments.map((comment) => (
            <Comment
              key={comment.uid}
              author={comment.author.name}
              avatar={comment.author.avatarUrl}
              content={comment.content}
              reply={comment.replyComment}
              time={parseDate(comment.createdAt, { format: 'short' }) ?? ''}
              uid={comment.uid}
              onCommentClick={onCommentClick}
              onReplyClick={onScrollToComment}
            />
          ))}
        </CommentsContainer>
      ) : (
        <CommentsEmpty />
      )}

      <CommentsAction area='action'>
        {data?.currentUser ? (
          <CommentInput
            avatarUrl={data?.currentUser.profile?.avatarUrl ?? ''}
            replyUid={replyUid}
            onReplyCancel={onReplyCancel}
            onSend={onCommentSend}
          />
        ) : (
          <CommentsLogin
            icon='right'
            onClick={() => router.push('/auth/github')}
          >
            ???????????????????????? ?????????? GitHub
          </CommentsLogin>
        )}
      </CommentsAction>
    </CommentsWrapper>
  )
}
