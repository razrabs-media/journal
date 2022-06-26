import Comment from '@razrabs-ui/comments'
import { useComments } from 'entities/comments'
import { useDisplayAnimation } from 'shared/lib'
import { parseDate } from 'shared/lib/parse-date'
import { CrossIcon, IconButton } from 'shared/ui'
import { Drawer } from './drawer'
import { CommentsAmount, CommentsContainer, Header } from './styled'

const TRANSITION_TIME = 150

export const CommentsWidget = () => {
  const { opened, comments, closeHandler } = useComments()

  const { display, animationIn, animationOut } = useDisplayAnimation(
    opened,
    TRANSITION_TIME,
  )

  return (
    <Drawer
      animationIn={animationIn}
      animationOut={animationOut}
      shouldDisplay={display}
      transitionTime={TRANSITION_TIME}
    >
      <Header>
        <CommentsAmount>Комменты: {comments?.length}</CommentsAmount>

        <IconButton color='primary' onClick={closeHandler}>
          <CrossIcon />
        </IconButton>
      </Header>

      <CommentsContainer>
        {comments?.map((comment) => (
          <Comment
            key={comment.uid}
            author={comment.author.name}
            avatar={comment.author.avatarUrl}
            content={comment.content}
            replyContent={comment.replyComment?.content}
            time={parseDate(comment.createdAt) ?? ''}
          />
        ))}
      </CommentsContainer>
    </Drawer>
  )
}
