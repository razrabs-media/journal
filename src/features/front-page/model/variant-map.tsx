import { PostCard, PostOutlineCard, PostRow } from '@razrabs-ui/posts'
import { PostProps } from '@razrabs-ui/posts/src/types'
import { FC } from 'react'

export enum CardVariant {
  Point = 'point',
  Line = 'line',
  Outline = 'long line',
}

type Props = PostProps & { mobile?: boolean }
export const CARD_BY_VARIANT: Readonly<Record<CardVariant, FC<Props>>> = {
  [CardVariant.Point]: ({ mobile, ...postProps }: Props) =>
    !mobile ? <PostCard {...postProps} /> : <PostRow small {...postProps} />,
  [CardVariant.Line]: (props) => <PostCard {...props} />,
  [CardVariant.Outline]: ({ mobile, ...postProps }) => (
    <PostOutlineCard small={mobile} {...postProps} />
  ),
}
