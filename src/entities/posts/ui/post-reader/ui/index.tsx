import { VFC } from 'react'
import { PostHeader } from './header'
import { ContentWrapper, StyledReader, StyledRenderer } from './styled'
import { Props } from './types'

export const PostReader: VFC<Props> = (props) => (
  <StyledReader>
    <PostHeader
      description={props.description}
      previewUrl={props.previewUrl}
      publicationDate={props.publicationDate}
      tags={props.tags}
      title={props.title}
      uid={props.uid}
    />

    <ContentWrapper>
      <StyledRenderer>{props.content}</StyledRenderer>
    </ContentWrapper>
  </StyledReader>
)
