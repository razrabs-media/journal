import Link from 'next/link'
import { FC, useMemo } from 'react'
import { Wrapper } from './styled'
import { PostCardMap, PostCardVariant, Props } from './types'
import { CenteredCard, DefaultCard } from './variants'

const CARD_BY_VARIANT: PostCardMap = {
  [PostCardVariant.Default]: DefaultCard,
  [PostCardVariant.Center]: CenteredCard,
}

const PostCardProxy: FC<Props> = ({
  variant = PostCardVariant.Default,
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
        />
      </Wrapper>
    </Link>
  )
}

export { PostCardProxy as PostCard, PostCardVariant }
export type { Props as PostCardProps } from './types'
