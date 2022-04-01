import { CenteredCardProps, DefaultCardProps } from './variants'

export enum PostCardVariant {
  Default = 'default',
  Center = 'center',
}

export type PostCardProps = { uid: string } & (
  | CenteredCardProps
  | DefaultCardProps
)

export type PostCardProxyProps = {
  variant?: PostCardVariant
  postData: PostCardProps
}
