import { FC, memo } from 'react'
import { FloatedPreview } from 'entities/posts/ui/post-reader/ui/floated-preview'
import { useFloatedBlock } from '../lib'
import { PostHeader } from './header'
import { ContentWrapper, StyledReader, StyledRenderer } from './styled'
import { Props } from './types'

const MemoizedMarkdownRenderer = memo(StyledRenderer)
MemoizedMarkdownRenderer.displayName = 'MemoizedMarkdownRenderer'

export const PostReader: FC<Props> = (props) => {
  const { postHeaderRef, shouldDisplay } = useFloatedBlock()

  return (
    <StyledReader>
      <FloatedPreview
        githubAuthor={props.githubAuthor}
        previewUrl={props.previewUrl}
        publicationDate={props.publicationDate}
        shouldDisplay={shouldDisplay}
        tags={props.tags}
        title={props.title}
        transitionTime={400}
      />

      <PostHeader
        commentsButton={props.commentsButton}
        description={props.description}
        githubAuthor={props.githubAuthor}
        previewUrl={props.previewUrl}
        publicationDate={props.publicationDate}
        ref={postHeaderRef}
        tags={props.tags}
        title={props.title}
        uid={props.uid}
      />

      <ContentWrapper>
        <MemoizedMarkdownRenderer>{props.content}</MemoizedMarkdownRenderer>
      </ContentWrapper>
    </StyledReader>
  )
}
