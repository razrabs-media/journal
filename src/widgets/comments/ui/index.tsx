import { useRouter } from 'next/router'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
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
import { useIsTabletAndBelow } from 'shared/ui/theme/responsive'
import Comment, { CommentForwardedRef } from './comment'
import { CommentsEmpty } from './comments-empty'
import { CommentsWrapper } from './comments-wrapper'
import { CommentData, CommentInput } from './input'
import {
  CommentsAction,
  CommentsAmount,
  CommentsContainer,
  CommentsLogin,
  Header,
  HeaderTexts,
  PostTitle,
} from './styled'
import { Props } from './types'

const TRANSITION_TIME = 150

export const CommentsWidget: FC<Props> = ({ postTitle }) => {
  const router = useRouter()
  const refContainer = useRef<HTMLDivElement>(null)
  const { opened, postUid, comments, closeHandler } = useContextComments()
  const ref = useDisableScroll(opened)
  const commentsRefs = useRef<Record<string, CommentForwardedRef | null>>({})
  const isTabletAndBelow = useIsTabletAndBelow()

  const [currentUserQuery, { data }] = useCurrentUserLazyQuery({
    errorPolicy: 'all',
  })

  useClientSide(currentUserQuery)

  const [sendComment] = useSendComment()

  const [replyUid, setReplyUid] = useState<string | undefined>(undefined)
  const [newCommentUid, setNewCommentUid] = useState<string | null>(null)

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
    if (commentsRefs.current[commentUid]) {
      commentsRefs.current[commentUid]?.highlight()
      commentsRefs.current[commentUid]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    }
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

        setNewCommentUid(newComment.uid)
      }
    },
    [postUid, sendComment],
  )

  const onReplyCancel = useCallback(() => {
    setReplyUid(undefined)
  }, [setReplyUid])

  useEffect(() => {
    if (opened) refContainer.current?.focus()
  }, [opened])

  useEffect(() => {
    if (newCommentUid && commentsRefs.current[newCommentUid]) {
      onScrollToComment(newCommentUid)

      setNewCommentUid(null)
    }
  }, [newCommentUid, comments, onScrollToComment])

  return (
    <CommentsWrapper
      animationIn={animationIn}
      animationOut={animationOut}
      ref={ref}
      shouldDisplay={display}
      transitionTime={TRANSITION_TIME}
    >
      <Header>
        <HeaderTexts>
          <CommentsAmount>Комменты: {comments?.length}</CommentsAmount>

          {postTitle && isTabletAndBelow && <PostTitle>{postTitle}</PostTitle>}
        </HeaderTexts>

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
              ref={(el: CommentForwardedRef) => {
                if (!commentsRefs.current[comment.uid]) {
                  commentsRefs.current[comment.uid] = el
                }
              }}
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
            open={opened}
            onClick={() => router.push('/auth/github')}
          >
            Залогиниться через Github
          </CommentsLogin>
        )}
      </CommentsAction>
    </CommentsWrapper>
  )
}
