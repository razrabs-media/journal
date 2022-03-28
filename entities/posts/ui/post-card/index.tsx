import { VFC } from 'react'
import { Props } from './types'
import { PostWrapper } from '../post-wraper'
import { CenterCard } from '../center-card'
import { ColumnCard } from '../column-card'

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
