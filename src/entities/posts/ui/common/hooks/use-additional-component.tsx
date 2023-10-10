import { ReactNode, useMemo } from 'react'

import type { PostMeta } from '../../types'
import { PostType } from '../../types'
import { Duration, LongRead } from '../components'

type _HookParams<T extends PostType = PostType> = {
  type: T
  contentMeta?: PostMeta<T>
}

type HookParams =
  | _HookParams<PostType.Article>
  | _HookParams<PostType.Video>
  | _HookParams<PostType.Tweet>

export const useAdditionalComponent = ({ type, contentMeta }: HookParams) =>
  useMemo((): ReactNode | undefined => {
    if (type === PostType.Article && contentMeta?.longRead) {
      return <LongRead />
    }

    if (type === PostType.Video && contentMeta?.duration) {
      return <Duration duration={contentMeta?.duration} />
    }

    return undefined
  }, [type, contentMeta])
