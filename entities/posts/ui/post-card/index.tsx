import Link from 'next/link'
import { useMemo, VFC } from 'react'
import { LinkSurface, Wrapper } from './styled'
import { PostCardProxyProps, PostCardVariant } from './types'
import { CenteredCard, DefaultCard } from './variants'

const CARD_BY_VARIANT = {
  [PostCardVariant.Default]: DefaultCard,
  [PostCardVariant.Center]: CenteredCard,
}

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
