import styled from '@emotion/styled'
import { forwardRef, ImgHTMLAttributes } from 'react'
import { ThemeName } from 'shared/config/theme'

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 80px;
  max-height: 500px;
`

const StyledImage = styled.img`
  position: relative;
  min-height: 80px;
  min-width: 80px;
  width: 100%;
  max-height: 600px;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 80px;
    content: url('/images/svg/${({ theme }) =>
      theme.name === ThemeName.Dark ? '404.svg' : '404_light.svg'}');
  }

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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string | undefined | null
}

export const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => (
  <ImageWrapper>
    <StyledImage {...props} ref={ref} src={props.src || undefined} />
  </ImageWrapper>
))

Image.displayName = 'Image'
