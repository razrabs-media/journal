import { VFC } from 'react'
import { FloatedPreview } from 'entities/posts/ui/post-reader/ui/floated-preview'
import { useFloatedBlock } from '../lib'
import { PostHeader } from './header'
import { ContentWrapper, StyledReader, StyledRenderer } from './styled'
import { Props } from './types'

export const PostReader: VFC<Props> = (props) => {
  const { postHeaderRef, shouldDisplay } = useFloatedBlock()

  return (
    <>
      <StyledReader>
        <PostHeader
          description={props.description}
          previewUrl={props.previewUrl}
          publicationDate={props.publicationDate}
          ref={postHeaderRef}
          tags={props.tags}
          title={props.title}
          uid={props.uid}
        />

        <ContentWrapper>
          <StyledRenderer>{props.content}</StyledRenderer>
        </ContentWrapper>
      </StyledReader>

      <FloatedPreview
        previewUrl={props.previewUrl}
        publicationDate={props.publicationDate}
        shouldDisplay={shouldDisplay}
        tags={props.tags}
        title={props.title}
      />
    </>
  )
}
