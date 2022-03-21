import styled from '@emotion/styled'
// import FallbackImage from './404.svg'
import { forwardRef, ImgHTMLAttributes } from 'react'
// import { ThemeName } from 'shared/config/theme'

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 80px;
  max-height: 500px;
`

// const StyledImage = styled.img`
//   height: 100px;
//   width: 100px;
// `
// const StyledFallbackImage = styled(FallbackImage)`
//     border: 1px solid red;
//     height: 100px;
//     width: 100px;
// `
const ImgNotFound = () => (
  <svg
    fill='none'
    height='50px'
    stroke='#E2E2E8'
    viewBox='0 0 48 48'
    width='50px'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect height='47' width='47' x='0.5' y='0.5' />
    <path d='M0.5 0.5L47.5 47.5' />
    <path d='M47.5 0.5L0.5 47.5' />
  </svg>
)

// &::after {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 80px;
//   height: 80px;
//   content: url('/images/svg/${({ theme }) =>
//     theme.name === ThemeName.Dark ? '404.svg' : '404_light.svg'}');
// }

// &::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: ${({ theme }) => theme.colors.background};
// }

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string | undefined | null
}

export const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => (
  <ImageWrapper>
    {props.src === undefined && <ImgNotFound />}

    {/* <StyledImage ref={ref} src={StyledFallbackImage} alt="" /> */}
    {/* <StyledImage {...props} ref={ref} src={props.src || undefined} /> */}
  </ImageWrapper>
))

Image.displayName = 'Image'
