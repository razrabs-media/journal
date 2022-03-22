import styled from '@emotion/styled'
import { forwardRef, ImgHTMLAttributes } from 'react'

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 80px;
  max-height: 500px;
`
const ImgNotFound = () => (
  <svg
    fill='none'
    height='70px'
    stroke='#E2E2E8'
    viewBox='0 0 48 48'
    width='70px'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect height='47' width='47' x='0.5' y='0.5' />
    <path d='M0.5 0.5L47.5 47.5' />
    <path d='M47.5 0.5L0.5 47.5' />
  </svg>
)

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

export const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => (
  <ImageWrapper>
    {props.src === undefined && <ImgNotFound />}
    {props.src !== undefined && (
      <StyledImage {...props} ref={ref} src={props.src || undefined} />
    )}
    {console.log(props.src)}
  </ImageWrapper>
))

Image.displayName = 'Image'
