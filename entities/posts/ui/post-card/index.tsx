import { VFC } from 'react'
import { CenterCard } from '../center-card'
import { ColumnCard } from '../column-card'
import { PostWrapper } from '../post-wraper'
import { Props } from './types'

export const PostCard: VFC<Props> = ({ configuration, position, post }) => (
  <PostWrapper {...position} h={configuration.h} w={configuration.w}>
    {configuration.type === 'center' ? (
      <CenterCard
        publicationDate={post.createdAt}
        title={post.title}
        uid={post.uid}
      />
    ) : (
      <ColumnCard
        previewUrl={post.previewUrl ?? ''}
        publicationDate={post.createdAt}
        title={post.title}
        uid={post.uid}
      />
    )}
  </PostWrapper>
)
