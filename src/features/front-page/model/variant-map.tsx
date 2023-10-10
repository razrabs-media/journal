import { FC } from 'react'
import { PostCard, PostOutlineCard, PostProps, PostRow } from 'entities/posts'

export enum CardVariant {
  Point = 'point',
  Line = 'line',
  Outline = 'long line',
}

type Props = PostProps
export const CARD_BY_VARIANT: Readonly<Record<CardVariant, FC<Props>>> = {
  [CardVariant.Point]: ({ small, ...postProps }: Props) =>
    !small ? <PostCard {...postProps} /> : <PostRow small {...postProps} />,

  [CardVariant.Line]: (props: Props) => <PostCard {...props} />,
  [CardVariant.Outline]: (props) => <PostOutlineCard {...props} />,
}
