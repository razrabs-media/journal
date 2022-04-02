import Link from 'next/link'
import { useMemo, VFC } from 'react'
import { LinkSurface, Wrapper } from './styled'
import { PostCardMap, PostCardVariant, Props } from './types'
import { CenteredCard, DefaultCard } from './variants'

const CARD_BY_VARIANT: PostCardMap = {
  [PostCardVariant.Default]: DefaultCard,
  [PostCardVariant.Center]: CenteredCard,
}

const PostCardProxy: VFC<Props> = ({
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
export type { Props as PostCardProps } from './types'
