import styled from '@emotion/styled'
import { useLayoutEffect, useRef, VFC } from 'react'
import { Image } from 'shared/ui'

const StyledAside = styled.aside``

const StaticBlock = styled.div``

const MetaRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`
const AnimatedBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`

const PublicationDate = styled.span``

type PostAsideProps = {
  shouldShowFloated: boolean
  title?: string
  previewUrl?: string
  publicationDate: number
  onImageHeightChange: (height: number) => void
}
export const PostAside: VFC<PostAsideProps> = ({
  shouldShowFloated,
  title,
  previewUrl,
  publicationDate,
  onImageHeightChange,
}) => {
  const imageEl = useRef<HTMLImageElement>(null)

  useLayoutEffect(() => {
    if (imageEl.current?.height) {
      onImageHeightChange(imageEl.current.height)
    }
  }, [onImageHeightChange, imageEl.current?.height])

  return (
    <StyledAside>
      <StaticBlock>
        <Image alt={title} ref={imageEl} src={previewUrl} />
        <MetaRow>
          <PublicationDate>{publicationDate}</PublicationDate>
        </MetaRow>
      </StaticBlock>

      {shouldShowFloated && <AnimatedBlock>TEST!!!</AnimatedBlock>}
    </StyledAside>
  )
}
