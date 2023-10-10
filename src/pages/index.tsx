import type { GetServerSideProps, NextPage } from 'next'
import { FeedSelector, GetFeeds, GetFeedsQuery } from 'features/feeds'
import {
  CurrentFrontPage,
  CurrentFrontPageQuery,
  FrontPageGrid,
  FrontPageItem,
  sortContent,
} from 'features/front-page'
import { FeedItem, initializeApollo } from 'shared/api'
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
          <FrontPageItem
            key={post.uid}
            h={h}
            postProps={post}
            variant={name}
            w={w}
            x={x}
            y={y}
          />
        ),
      )}
    </FrontPageGrid>
  </>
)

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const apolloClient = initializeApollo()

  const {
    data: { currentFrontPage },
  } = await apolloClient.query<CurrentFrontPage>({
    query: CurrentFrontPageQuery,
  })

  const {
    data: { feeds },
  } = await apolloClient.query<GetFeeds>({
    query: GetFeedsQuery,
  })

  const frontPage = Object.assign({}, currentFrontPage, {
    content: sortContent(currentFrontPage.content),
  })

  return {
    props: { frontPage, feeds: feeds.slice(0, 10) },
  }
}

export default HomePage
