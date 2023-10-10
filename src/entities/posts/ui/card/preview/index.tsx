import type { FC } from 'react'
import Image, { FallbackSquare } from 'shared/ui/image'

import { usePreviewProps } from '../../common/hooks'
import { OverridePreviewProps, PostType } from '../../types'
import { StyledPreview, StyledVideoBadge } from './styled'
import type { PreviewProps } from './types'

const VIDEO_PREVIEW_PROPS = {
  w: 192,
  h: 192,
  align: 'center' as const,
}
const TWEET_PREVIEW_PROPS = {
  w: 64,
  h: 64,
}
const POST_PREVIEW_PROPS = {
  w: '100%',
  align: 'left' as const,
}

export const Preview: FC<
  PreviewProps & { previewProps?: OverridePreviewProps }
> = ({ type, preview, alt, previewProps: overridePreviewProps, ...props }) => {
  const previewProps = usePreviewProps(type, {
    videoProps: VIDEO_PREVIEW_PROPS,
    tweetProps: TWEET_PREVIEW_PROPS,
    postProps: POST_PREVIEW_PROPS,
  })

  return (
    <StyledPreview>
      <Image
        alt={alt}
        {...previewProps}
        priority
        fallback={
          <FallbackSquare
            h={overridePreviewProps?.height}
            w={overridePreviewProps?.width}
          />
        }
        fit={overridePreviewProps?.objectFit || 'cover'}
        h={overridePreviewProps?.height || previewProps.h}
        loadingSize='xs'
        maxH={505}
        src={overridePreviewProps?.src || preview}
        w={overridePreviewProps?.width || previewProps.w}
        {...props}
      />

      {type === PostType.Video && <StyledVideoBadge />}
    </StyledPreview>
  )
}
