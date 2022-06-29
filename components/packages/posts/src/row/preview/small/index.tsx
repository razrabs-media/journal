import Image, { FallbackSquare } from '@razrabs-ui/image'
import { useState } from 'react'
import type { FC } from 'react'

import { usePreviewProps } from '../../../common/hooks'
import { PostType } from '../../../types'
import type { PreviewProps } from '../types'
import { StyledPreview, StyledVideoBadge } from './styled'

const VIDEO_PREVIEW_PROPS = {
  w: 105,
  h: 105,
  align: 'center' as const,
  fit: 'cover' as const,
}
const TWEET_PREVIEW_PROPS = {
  w: 48,
  h: 48,
  align: undefined,
  fit: 'cover' as const,
}
const POST_PREVIEW_PROPS = {
  w: '100%',
  h: undefined,
  align: 'top' as const,
  fit: 'scale-down' as const,
}

export const SmallPreview: FC<PreviewProps> = ({
  type,
  preview,
  alt,
  ...props
}) => {
  const previewProps = usePreviewProps(type, {
    videoProps: VIDEO_PREVIEW_PROPS,
    tweetProps: TWEET_PREVIEW_PROPS,
    postProps: POST_PREVIEW_PROPS,
  })
  const video = type === PostType.Video

  const [error, setError] = useState(false)
  const onError = () => {
    setError(true)
  }

  return (
    <StyledPreview>
      <Image
        align={error ? POST_PREVIEW_PROPS.align : previewProps.align}
        alt={alt}
        fallback={<FallbackSquare />}
        fit={error ? POST_PREVIEW_PROPS.fit : previewProps.fit}
        h={error ? POST_PREVIEW_PROPS.h : previewProps.h}
        src={preview}
        w={error ? POST_PREVIEW_PROPS.w : previewProps.w}
        onError={onError}
        {...props}
      />

      {video && <StyledVideoBadge />}
    </StyledPreview>
  )
}
