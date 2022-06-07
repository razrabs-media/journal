import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { FeedSelector, GetFeeds, GetFeedsQuery } from 'features/feeds'
import {
  CurrentFrontPage,
  CurrentFrontPageQuery,
  FrontPageGrid,
  FrontPageItem,
  sortContent,
} from 'features/front-page'
import { client, FeedItem } from 'shared/api'
import { Helmet } from 'shared/lib/helmet'

type Props = {
  frontPage: CurrentFrontPage['currentFrontPage']
  feeds: Pick<FeedItem, 'uid' | 'name'>[]
}

const HomePage: NextPage<Props> = ({ frontPage, feeds }) => (
  <>
    <Helmet />

    <FeedSelector feeds={feeds} />

    <FrontPageGrid>
      {frontPage.content.map(
        ({
          uid,
          position: { x, y },
          component: {
            name,
            configuration: { h, w },
          },
          post,
        }) => (
          <Link key={uid} passHref href={`/post/${post.uid}`}>
            <FrontPageItem
              h={h}
              postProps={post}
              variant={name}
              w={w}
              x={x}
              y={y}
            />
          </Link>
        ),
      )}
    </FrontPageGrid>
  </>
)

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const {
    data: { currentFrontPage },
  } = await client.query<CurrentFrontPage>({
    query: CurrentFrontPageQuery,
    fetchPolicy: 'no-cache',
  })

  const {
    data: { feeds },
  } = await client.query<GetFeeds>({
    query: GetFeedsQuery,
    fetchPolicy: 'no-cache',
  })

  const frontPage = Object.assign({}, currentFrontPage, {
    content: sortContent(currentFrontPage.content),
  })

  return {
    props: { frontPage, feeds: feeds.slice(0, 10) },
  }
}

export default HomePage
