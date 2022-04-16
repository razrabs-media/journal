import styled from '@emotion/styled'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { FC, useLayoutEffect, useRef } from 'react'
import { Image, Typography } from 'shared/ui'

const StyledAside = styled.aside`
  position: relative;
`

const StaticBlock = styled.div``

const MetaRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`

const AnimatedBlock = styled.div`
  position: fixed;
  top: 60px; // Отступ высоты шапки
`

const PublicationDate = styled.span``

type PostAsideProps = {
  shouldShowFloated: boolean
  title?: string
  previewUrl?: string
  publicationDate: number
  onImageHeightChange: (height: number) => void
}
export const PostAside: FC<PostAsideProps> = ({
  shouldShowFloated,
  title,
  previewUrl,
  publicationDate,
  onImageHeightChange,
}) => {
  const imageEl = useRef<HTMLImageElement>(null)

  // TODO: useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format.
  useLayoutEffect(() => {
    if (imageEl.current?.height) {
      onImageHeightChange(imageEl.current.height)
    }
  }, [onImageHeightChange, imageEl.current?.height])

  const date = format(publicationDate, 'dd MMMM, H:mm', {
    locale: ru,
  })

  return (
    <StyledAside>
      <StaticBlock>
        <Image alt={title} ref={imageEl} src={previewUrl} />
        <MetaRow>
          <PublicationDate>
            <Typography transparent uppercase>
              {date}
            </Typography>
          </PublicationDate>
        </MetaRow>
      </StaticBlock>

      {shouldShowFloated && (
        <AnimatedBlock>
          <i>*Тут будет плавающий блок*</i>
        </AnimatedBlock>
      )}
    </StyledAside>
  )
}
