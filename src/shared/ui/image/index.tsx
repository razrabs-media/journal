/* eslint-disable @typescript-eslint/no-unused-vars */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { default as NextImage } from 'next/image'
import type {
  ComponentProps,
  CSSProperties,
  FC,
  ReactNode,
  SyntheticEvent,
} from 'react'
import { useState } from 'react'

const GITHUB_REPOSITORY_NAME = 'razrabs-media'
const GITHUB_MAIN_BRANCH = 'main'
const GITHUB_RAW_HOST = 'raw.githubusercontent.com'

const ALLOWED_HOST = [
  GITHUB_RAW_HOST,
  'github.com',
  'avatars.githubusercontent.com',
]

const SIZE_MAP = {
  micro: 40,
  xs: 320,
  sm: 540,
  md: 1024,
  lg: 1280,
  xl: 1600,
} as const

type NativeProps = ComponentProps<'img'>

export type StyledImageProps = {
  maxW?: CSSProperties['maxWidth']
  maxH?: CSSProperties['maxHeight']
  width?: any
  height?: any
  align?: CSSProperties['objectPosition']
  fit?: CSSProperties['objectFit']
  loadingSize?: keyof typeof SIZE_MAP
  priority?: boolean
  as?: any
}

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

const ImageWrapper = styled.div<StyledImageProps>((props) => ({
  position: 'relative',
  maxHeight: props.maxH,
  maxWidth: props.maxW,
  width: props.width || 'auto',
  height: props.height || 'auto',
  flexShrink: 0,
}))

const StyledImage = styled(NextImage, {
  shouldForwardProp: (prop) =>
    prop !== 'objectPosition' && prop !== 'fit' && prop !== 'maxHeight',
})<{ fit?: string; maxHeight?: number | string }>`
  position: relative !important;
  max-height: ${({ maxHeight = '100%' }) =>
    typeof maxHeight === 'number' ? maxHeight + 'px' : maxHeight};
  max-width: 100%;
  object-fit: ${({ fit = 'cover' }) => fit};
  object-position: ${({ objectPosition = 'center' }) => objectPosition};
`

export type ImageProps = {
  w?: NativeProps['width']
  h?: NativeProps['height']

  fallback?: ReactNode
  fallbackSrc?: string
} & StyledImageProps &
  Omit<NativeProps, 'placeholder' | 'ref'>

const Image: FC<ImageProps> = (props) => {
  const {
    w,
    width,
    h,
    height,
    src,
    fallback,
    fallbackSrc,
    priority = false,
    as,
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
  if (error || src === undefined || src === '') {
    if (fallback) {
      return (
        <FallbackWrapper
          {...restProps}
          height={preferredHeight}
          width={preferredWidth}
        >
          {fallback}
        </FallbackWrapper>
      )
    }
    return (
      <FallbackWrapper>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={props.alt} src='' />
      </FallbackWrapper>
    )
  }

  const checkImageHost = (src?: string): [string | undefined, boolean] => {
    try {
      if (!src) {
        return [src, false]
      }

      const srcUrl = new URL(src)
      const splitedPathname = srcUrl.pathname.split('/')

      const needReplaceBranch =
        srcUrl.hostname === GITHUB_RAW_HOST &&
        splitedPathname[1] === GITHUB_REPOSITORY_NAME

      if (needReplaceBranch) {
        splitedPathname[3] = GITHUB_MAIN_BRANCH
      }

      const pathname = splitedPathname.join('/')
      srcUrl.pathname = pathname

      const shouldOptimize = !ALLOWED_HOST.some(
        (host) => host === srcUrl.hostname,
      )

      return [srcUrl.href, shouldOptimize]
    } catch (err) {
      setError(true)
      return [src, false]
    }
  }

  const imageLoadingWidth = props.loadingSize
    ? SIZE_MAP[props.loadingSize] + 'px'
    : '100%'

  const [imageHref, shouldOptimized] = checkImageHost(src)

  return (
    <ImageWrapper
      as={as}
      height={preferredHeight}
      width={preferredWidth}
      {...restProps}
    >
      <StyledImage
        fill
        alt={props.alt || props.title || 'image'}
        fit={restProps.fit}
        maxHeight={restProps.maxH}
        placeholder='empty'
        priority={priority}
        sizes={imageLoadingWidth}
        src={imageHref || ''}
        title={props.title || props.alt || 'image'}
        unoptimized={shouldOptimized}
        onError={_onError}
      />
    </ImageWrapper>
  )
}

export { FallbackSquare } from './fallback-square'
export { FallbackX } from './fallback-x'
export default Image
