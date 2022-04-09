import styled from '@emotion/styled'
import { forwardRef, ImgHTMLAttributes } from 'react'
import FallbackImage from './404.svg'

const StyledFallbackImage = styled(FallbackImage)`
  stroke: ${({ theme }) => theme.colors.primary}
  width: 80px;
  height: 80px;
`

// Экспортирую отдельно, чтобы была возможность застилизовать в дальнейшем
export const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 80px;
  max-height: 500px;
  height: 100%;
`

const StyledImage = styled.img`
  min-height: 80px;
  min-width: 80px;
  max-width: 100%;
  max-height: 500px;
  height: 100%;
`

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string | undefined | null
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, ...restProps }, ref) => (
    <ImageWrapper>
      {src ? (
        <StyledImage {...restProps} ref={ref} src={src} />
      ) : (
        <StyledFallbackImage />
      )}
    </ImageWrapper>
  ),
)

Image.displayName = 'Image'
