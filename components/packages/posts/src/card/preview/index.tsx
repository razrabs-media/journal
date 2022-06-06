import Image, { FallbackSquare } from '@razrabs-ui/image'
import type { FC } from 'react'

import { usePreviewProps } from '../../common/hooks'
import { PostType } from '../../types'
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

export const Preview: FC<PreviewProps> = ({ type, preview, alt, ...props }) => {
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
        fallback={<FallbackSquare />}
        fit='cover'
        maxH={505}
        src={preview}
        {...props}
      />

      {type === PostType.Video && <StyledVideoBadge />}
    </StyledPreview>
  )
}
