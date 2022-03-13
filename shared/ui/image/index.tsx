import styled from '@emotion/styled'
import {
  forwardRef,
  ImgHTMLAttributes,
  MutableRefObject,
  RefObject,
  VFC,
} from 'react'
import FallbackImage from './404.svg'

const ImageWrapper = styled.div`
  position: relative;
`

const StyledImage = styled.img`
  position: relative;
  min-height: 80px;
  min-width: 80px;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.background};
  }
`

const StyledFallbackImage = styled(FallbackImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;

  stroke: ${({ theme }) => theme.colors.text.secondary};
`

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string | undefined | null
}

export const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => (
  <ImageWrapper>
    <StyledImage {...props} ref={ref} src={props.src || undefined} />

    <StyledFallbackImage />
  </ImageWrapper>
))

Image.displayName = 'Image'
