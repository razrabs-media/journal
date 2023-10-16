import { FC, memo } from 'react'
// eslint-disable-next-line
import { useContextComments } from 'entities/comments'
import { Aside } from './aside'
import { PostHeader } from './header'
// import { useBlockVisible } from './hooks'
import {
  ContentWrapper,
  SecondRow,
  SecondWrapper,
  StyledReader,
  StyledRenderer,
} from './styled'
import { Props } from './types'

const MemoizedMarkdownRenderer = memo(StyledRenderer)
MemoizedMarkdownRenderer.displayName = 'MemoizedMarkdownRenderer'

export const PostReader: FC<Props> = (props) => {
  const { opened } = useContextComments()
  // const [headerVisibilityRef, isShowDataAside] = useBlockVisible()

  return (
    <StyledReader open={opened}>
      <Aside
        githubAuthor={props.githubAuthor}
        isShowDataAside={false}
        open={opened}
        previewUrl={props.previewUrl}
        publicationDate={props.publicationDate}
        tags={props.tags}
        title={props.title}
        uid={props.uid}
      />

      <SecondRow>
        <SecondWrapper>
          <PostHeader
            commentsButton={props.commentsButton}
            description={props.description}
            githubAuthor={props.githubAuthor}
            headerVisibilityRef={undefined}
            open={opened}
            previewUrl={props.previewUrl}
            publicationDate={props.publicationDate}
            tags={props.tags}
            title={props.title}
            uid={props.uid}
          />

          <ContentWrapper itemProp='articleBody'>
            <MemoizedMarkdownRenderer>{props.content}</MemoizedMarkdownRenderer>
          </ContentWrapper>
        </SecondWrapper>
      </SecondRow>
    </StyledReader>
  )
}
