import { FC } from 'react'

export enum PostCardVariant {
  Default = 'default',
  Center = 'center',
}

type PostData = {
  uid: string
  title: string
  previewUrl?: string
  publicationDate: number
}

export type PostCardMap = Readonly<Record<PostCardVariant, FC<PostData>>>

export type Props = {
  variant?: PostCardVariant
  postData: PostData
}
