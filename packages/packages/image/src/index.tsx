import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useState } from 'react'
import type {
  ComponentProps,
  CSSProperties,
  FC,
  ReactNode,
  SyntheticEvent,
} from 'react'

type NativeProps = ComponentProps<'img'>

type StyledImageProps = {
  maxW?: CSSProperties['maxWidth']
  maxH?: CSSProperties['maxHeight']

  align?: CSSProperties['objectPosition']
  fit?: CSSProperties['objectFit']
}
const StyledImage = styled.img<StyledImageProps>((props) => ({
  maxWidth: props.maxW,
  maxHeight: props.maxH,

  objectFit: props.fit,
  objectPosition: props.align,
}))

type FallbackWrapperProps = {
  width?: CSSProperties['width']
  height?: CSSProperties['width']
} & StyledImageProps
const FallbackWrapper = styled.div<FallbackWrapperProps>`
  width: ${({ width }) =>
    width && typeof width === 'number' ? `${width}px` : width};
  height: ${({ height }) =>
    height && typeof height === 'number' ? `${height}px` : height};

  display: flex;
  flex-direction: column;

  ${({ align }) => {
    switch (align) {
      case 'center':
        return css`
          align-items: center;
          justify-content: center;
        `
      case 'top':
        return css`
          align-items: center;
          justify-content: flex-start;
        `
      case 'bottom':
        return css`
          align-items: center;
          justify-content: flex-end;
        `
      case 'left':
        return css`
          align-items: flex-start;
          justify-content: center;
        `
      case 'right':
        return css`
          align-items: flex-end;
          justify-content: center;
        `
      default:
        return undefined
    }
  }}
`

export type ImageProps = {
  w?: NativeProps['width']
  h?: NativeProps['height']

  fallback?: ReactNode
  fallbackSrc?: string
} & StyledImageProps &
  NativeProps
const Image: FC<ImageProps> = (props) => {
  const {
    w,
    width,
    h,
    height,
    src,
    fallback,
    fallbackSrc,
    onError,
    ...restProps
  } = props

  const preferredWidth = w || width
  const preferredHeight = h || height

  const [error, setError] = useState(false)

  const _onError = (event: SyntheticEvent<HTMLImageElement>) => {
    setError(true)

    if (onError) {
      onError(event)
    }
  }

  // Если ошибка и передан компонент - возвращаем компонент
  if ((error || !src) && fallback) {
    return (
      <FallbackWrapper
        height={preferredHeight}
        width={preferredWidth}
        {...restProps}
      >
        {fallback}
      </FallbackWrapper>
    )
  }

  return (
    <StyledImage
      height={preferredHeight}
      src={error ? fallbackSrc : src}
      width={preferredWidth}
      onError={_onError}
      {...restProps}
    />
  )
}

export { FallbackSquare } from './fallback-square'
export { FallbackX } from './fallback-x'
export default Image
