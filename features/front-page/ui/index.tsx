import { VFC } from 'react'
import { PostCard, PostCardVariant } from 'entities/posts'
import { FrontPageGrid } from './grid'
import { FrontPageItem } from './item'
import type { Props } from './types'

export const FrontPage: VFC<Props> = ({
  frontPage,
  PostCardComponent = PostCard,
}) => (
  <FrontPageGrid>
    {frontPage.content.map((item) => (
      <FrontPageItem
        key={item.uid}
        x={item.position.x}
        y={item.position.y}
        w={item.component.configuration.w}
        h={item.component.configuration.h}
        component={
          <PostCardComponent
            variant={
              item.component.configuration.type === 'center'
                ? PostCardVariant.Center
                : PostCardVariant.Default
            }
            postData={{
              uid: item.post.uid,
              title: item.post.title,
              previewUrl: item.post.previewUrl || '',
              publicationDate: frontPage.publicationDate || item.post.createdAt,
            }}
          />
        }
      />
    ))}
  </FrontPageGrid>
)
