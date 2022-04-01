import styled from '@emotion/styled'
import Link from 'next/link'
import { useMemo, VFC } from 'react'
import { PostCardVariant, PostCardProxyProps } from './types'
import { CenteredCard, DefaultCard } from './variants'

const CARD_BY_VARIANT = {
  [PostCardVariant.Default]: DefaultCard,
  [PostCardVariant.Center]: CenteredCard,
}

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
`

const LinkSurface = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const PostCardProxy: VFC<PostCardProxyProps> = ({
  variant = PostCardVariant.Default,
  postData,
}) => {
  const PostCard = useMemo(() => CARD_BY_VARIANT[variant], [variant])

  return (
    <Link passHref href={`/post/${postData.uid}`}>
      <Wrapper>
        <PostCard {...postData} />
        <LinkSurface />
      </Wrapper>
    </Link>
  )
}

export { PostCardProxy as PostCard, PostCardVariant }
export type { PostCardProxyProps as PostCardProps } from './types'
