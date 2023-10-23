import { FC, memo } from 'react'
// eslint-disable-next-line
import { useContextComments } from 'entities/comments'
import { PostHeader } from './header'
import { ContentWrapper, StyledReader, StyledRenderer } from './styled'
import { Props } from './types'

const MemoizedMarkdownRenderer = memo(StyledRenderer)
MemoizedMarkdownRenderer.displayName = 'MemoizedMarkdownRenderer'

export const PostReader: FC<Props> = (props) => {
  const { opened } = useContextComments()

  return (
    <StyledReader open={opened}>
      <PostHeader
        commentsButton={props.commentsButton}
        description={props.description}
        githubAuthor={props.githubAuthor}
        previewUrl={props.previewUrl}
        publicationDate={props.publicationDate}
        tags={props.tags}
        title={props.title}
        uid={props.uid}
      />

      <ContentWrapper itemProp='articleBody'>
        <MemoizedMarkdownRenderer>{props.content}</MemoizedMarkdownRenderer>
      </ContentWrapper>
    </StyledReader>
  )
}
