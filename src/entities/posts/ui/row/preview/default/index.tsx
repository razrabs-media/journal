import { useState } from 'react'
import type { FC } from 'react'
import Image, { FallbackX } from 'shared/ui/image'

import { usePreviewProps } from '../../../common/hooks'
import { PostType } from '../../../types'
import type { PreviewProps } from '../types'
import { Border, StyledPreview, StyledVideoBadge } from './styled'

const VIDEO_PREVIEW_PROPS = {
  w: 80,
  h: 80,
  align: 'center' as const,
  fit: 'cover' as const,
}
const TWEET_PREVIEW_PROPS = {
  w: 48,
  h: 48,
  fit: 'cover' as const,
}
const POST_PREVIEW_PROPS = {
  w: '100%',
  h: '100%',
  align: 'top' as const,
  fit: 'scale-down' as const,
}

export const DefaultPreview: FC<PreviewProps & { loadingSize?: any }> = ({
  type,
  preview,
  alt,
  ...props
}) => {
  const [error, setError] = useState(false)

  const onError = () => {
    setError(true)
  }

  const previewProps = usePreviewProps(type, {
    videoProps: VIDEO_PREVIEW_PROPS,
    tweetProps: TWEET_PREVIEW_PROPS,
    postProps: POST_PREVIEW_PROPS,
  })

  return (
    <StyledPreview error={error} type={type}>
      <Image
        {...previewProps}
        align={error ? 'center' : previewProps?.align}
        alt={alt}
        fallback={<FallbackX />}
        src={preview}
        onError={onError}
        {...props}
      />

      {(type === PostType.Video || error) && (
        <Border>
          {type === PostType.Video && <StyledVideoBadge h={24} w={40} />}
        </Border>
      )}
    </StyledPreview>
  )
}
