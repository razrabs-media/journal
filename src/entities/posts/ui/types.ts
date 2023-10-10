import type { ElementType } from 'react'

export enum PostType {
  Article = 'article',
  Video = 'video',
  Tweet = 'tweet',
}

type _PostMeta = {
  [PostType.Article]: {
    longRead?: boolean
  }
  [PostType.Video]: {
    duration?: string
  }
  [PostType.Tweet]: {
    author?: string
  }
}

export type PostMeta<T extends PostType = PostType> = _PostMeta[T]

interface IPostProps<T extends PostType = PostType> {
  as?: ElementType
  className?: string

  type: T

  title: string
  preview?: string
  date?: string

  contentMeta?: PostMeta<T>

  chiefPost?: boolean
}

export type SizeProps = { small?: boolean }

export type PostProps = (
  | IPostProps<PostType.Article>
  | IPostProps<PostType.Video>
  | IPostProps<PostType.Tweet>
) &
  SizeProps

export type OverridePreviewProps = {
  src?: string
  width?: string | number
  height?: string | number
  objectFit: React.CSSProperties['objectFit']
}
