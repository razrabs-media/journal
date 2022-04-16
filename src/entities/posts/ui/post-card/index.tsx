import Link from 'next/link'
import { useMemo, VFC } from 'react'
import { Wrapper } from './styled'
import { PostCardMap, PostCardVariant, Props } from './types'
import { CenteredCard, DefaultCard } from './variants'

const CARD_BY_VARIANT: PostCardMap = {
  [PostCardVariant.Point]: DefaultCard,
  [PostCardVariant.Line]: DefaultCard,
  [PostCardVariant.LongLine]: CenteredCard,
}

const PostCardProxy: VFC<Props> = ({
  variant = PostCardVariant.Point,
  postData,
}) => {
  const PostCard = useMemo(() => CARD_BY_VARIANT[variant], [variant])

  return (
    <Link passHref href={`/post/${postData.uid}`}>
      <Wrapper>
        <PostCard
          previewUrl={postData.previewUrl}
          publicationDate={postData.publicationDate}
          title={postData.title}
          uid={postData.uid}
          variant={variant}
        />
      </Wrapper>
    </Link>
  )
}

export { PostCardProxy as PostCard, PostCardVariant }
export type { Props as PostCardProps } from './types'
