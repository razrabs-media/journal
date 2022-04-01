import { VFC } from 'react'
import { PostCard, PostCardProps, PostCardVariant } from 'entities/posts'
import { CurrentFrontPage } from '../model'
import { FrontPageGrid } from './grid'
import { FrontPageItem } from './item'

type FrontPageProps = {
  frontPage: CurrentFrontPage['currentFrontPage']
  PostCardComponent?: VFC<PostCardProps>
}
export const FrontPage: VFC<FrontPageProps> = ({
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
