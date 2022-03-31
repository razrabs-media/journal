import styled from '@emotion/styled'
import { forwardRef, ImgHTMLAttributes } from 'react'
import FallbackImage from './404.svg'

const StyledFallbackImage = styled(FallbackImage)`
  stroke: ${({ theme }) => theme.colors.primary}
  width: 80px;
  height: 80px;
`

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 80px;
  max-height: 500px;
`

const StyledImage = styled.img`
  min-height: 80px;
  min-width: 80px;
  max-height: 600px;
  width: 100%;
  object-fit: cover;
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
