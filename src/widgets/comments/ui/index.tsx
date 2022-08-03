import Comment, { CommentForwardedRef } from '@razrabs-ui/comments'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
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
  const refContainer = useRef<HTMLDivElement>(null)
  const { opened, postUid, comments, closeHandler } = useContextComments()
  const ref = useDisableScroll(opened)
  const commentsRefs = useRef<Record<string, CommentForwardedRef | null>>({})

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

  const onCommentClick = useCallback(
    (newReplyUid: string) => {
      setReplyUid(newReplyUid)
    },
    [setReplyUid],
  )

  const onScrollToComment = useCallback((commentUid: string) => {
    commentsRefs.current[commentUid]?.highlight()
    commentsRefs.current[commentUid]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  }, [])

  const onCommentSend = useCallback(
    async (commentData: CommentData) => {
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

        // Надо подождать, пока реакт примаунтит компонент после обновления стейта
        requestAnimationFrame(() => {
          onScrollToComment(newComment.uid)
        })
      }
    },
    [postUid, onScrollToComment, sendComment],
  )

  const onReplyCancel = useCallback(() => {
    setReplyUid(undefined)
  }, [setReplyUid])

  useEffect(() => {
    if (opened) refContainer.current?.focus()
  }, [opened])

  return (
    <CommentsWrapper
      animationIn={animationIn}
      animationOut={animationOut}
      ref={ref}
      shouldDisplay={display}
      transitionTime={TRANSITION_TIME}
    >
      <Header>
        <CommentsAmount>Комменты: {comments?.length}</CommentsAmount>

        <IconButton color='primary' onClick={closeHandler}>
          <CrossIcon />
        </IconButton>
      </Header>

      {comments.length ? (
        <CommentsContainer ref={refContainer}>
          {comments.map((comment) => (
            <Comment
              key={comment.uid}
              author={comment.author.name}
              avatar={comment.author.avatarUrl}
              content={comment.content}
              ref={(el) => (commentsRefs.current[comment.uid] = el)}
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
            Залогиниться через Github
          </CommentsLogin>
        )}
      </CommentsAction>
    </CommentsWrapper>
  )
}
