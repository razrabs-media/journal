import styled from '@emotion/styled'
import { forwardRef, ImgHTMLAttributes } from 'react'
import fallbackImage from './404.svg'

const StyledFallbackImage = styled(fallbackImage)`
  width: 100px;
  height: 100px;
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
  width: 100%;
  max-height: 600px;
`

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string | undefined | null
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, ...restProps }, ref) => (
    <ImageWrapper>
      {src === undefined ? (
        <StyledFallbackImage />
      ) : (
        <StyledImage {...restProps} ref={ref} src={src || undefined} />
      )}
    </ImageWrapper>
  ),
)

Image.displayName = 'Image'
