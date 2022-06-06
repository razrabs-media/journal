import type { ImageProps } from 'image'
import { useMemo } from 'react'

import { PostType } from '../../types'

type PropsMap = {
  videoProps: ImageProps
  tweetProps: ImageProps
  postProps: ImageProps
}

export const usePreviewProps = (
  type: PostType,
  { videoProps, tweetProps, postProps }: PropsMap,
) =>
  useMemo(() => {
    if (type === PostType.Video) {
      return videoProps
    }

    if (type === PostType.Tweet) {
      return tweetProps
    }

    return postProps
  }, [type])
