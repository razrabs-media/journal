import { FC, memo, MutableRefObject, useEffect, useRef, useState } from 'react'
// eslint-disable-next-line
import { useContextComments } from 'entities/comments'
import { Aside } from './aside'
import { PostHeader } from './header'
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
  const headerVisibilityRef = useRef()
  const [isShowDataAside, setIsShowDataAside] = useState(false)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      setIsShowDataAside(entries[0].intersectionRatio <= 0)
    })
    intersectionObserver.observe(
      (headerVisibilityRef as MutableRefObject<any>).current,
    )

    return () => {
      intersectionObserver.disconnect()
    }
  }, [isShowDataAside, setIsShowDataAside])

  return (
    <StyledReader open={opened}>
      <div>
        <Aside
          githubAuthor={props.githubAuthor}
          isShowDataAside={isShowDataAside}
          open={opened}
          previewUrl={props.previewUrl}
          publicationDate={props.publicationDate}
          tags={props.tags}
          title={props.title}
          uid={props.uid}
        />
      </div>

      <SecondRow>
        <SecondWrapper>
          <PostHeader
            commentsButton={props.commentsButton}
            description={props.description}
            githubAuthor={props.githubAuthor}
            headerVisibilityRef={headerVisibilityRef}
            open={opened}
            previewUrl={props.previewUrl}
            publicationDate={props.publicationDate}
            tags={props.tags}
            title={props.title}
            uid={props.uid}
          />

          <ContentWrapper itemProp='articleBody' open={opened}>
            <MemoizedMarkdownRenderer>{props.content}</MemoizedMarkdownRenderer>
          </ContentWrapper>
        </SecondWrapper>
      </SecondRow>
    </StyledReader>
  )
}
