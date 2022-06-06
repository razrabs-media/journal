import { FC } from 'react'

export enum PostCardVariant {
  Point = 'point',
  Line = 'line',
  LongLine = 'long line',
}

export type PostData = {
  variant: PostCardVariant
  uid: string
  title: string
  previewUrl?: string
  publicationDate: number
  chiefPost?: boolean
}

export type PostCardMap = Readonly<Record<PostCardVariant, FC<PostData>>>

export type Props = {
  postData: PostData
}
