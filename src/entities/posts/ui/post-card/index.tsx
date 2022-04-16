import Link from 'next/link'
import { FC, useMemo } from 'react'
import { Wrapper } from './styled'
import { PostCardMap, PostCardVariant, Props } from './types'
import { CenteredCard, DefaultCard } from './variants'

const CARD_BY_VARIANT: PostCardMap = {
  [PostCardVariant.Point]: DefaultCard,
  [PostCardVariant.Line]: DefaultCard,
  [PostCardVariant.LongLine]: CenteredCard,
}

const PostCardProxy: FC<Props> = ({ postData }) => {
  const PostCard = useMemo(
    () => CARD_BY_VARIANT[postData.variant],
    [postData.variant],
  )

  return (
    <Link passHref href={`/post/${postData.uid}`}>
      <Wrapper>
        <PostCard
          previewUrl={postData.previewUrl}
          publicationDate={postData.publicationDate}
          title={postData.title}
          uid={postData.uid}
          variant={postData.variant}
        />
      </Wrapper>
    </Link>
  )
}

export { PostCardProxy as PostCard, PostCardVariant }
export type { Props as PostCardProps } from './types'
