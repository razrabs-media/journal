import { FC, memo } from 'react'
import { PostHeader } from './header'
import { ContentWrapper, StyledReader, StyledRenderer } from './styled'
import { Props } from './types'

const MemoizedMarkdownRenderer = memo(StyledRenderer)
MemoizedMarkdownRenderer.displayName = 'MemoizedMarkdownRenderer'

export const PostReader: FC<Props> = (props) => (
  <StyledReader>
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
      <MemoizedMarkdownRenderer>
        {props.description + props.content}
      </MemoizedMarkdownRenderer>
    </ContentWrapper>
  </StyledReader>
)
