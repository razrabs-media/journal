import type { GetServerSideProps } from 'next'
import HomePage from 'pages'
import { GetFeeds, GetFeedsQuery } from 'features/feeds'
import {
  SharedFrontPage,
  SharedFrontPageQuery,
  sortContent,
} from 'features/front-page'
import { initializeApollo } from 'shared/api'

type Props = {
  frontPage?: SharedFrontPage['sharedFrontPage']
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const apolloClient = initializeApollo()

  const {
    data: { sharedFrontPage },
  } = await apolloClient.query<SharedFrontPage>({
    query: SharedFrontPageQuery,
    fetchPolicy: 'no-cache',
    variables: { uid: query.uid?.toString() ?? '' },
  })

  const {
    data: { feeds },
  } = await apolloClient.query<GetFeeds>({
    query: GetFeedsQuery,
  })

  if (!sharedFrontPage) return { props: { feeds: feeds.slice(0, 10) } }

  const frontPage = Object.assign({}, sharedFrontPage, {
    content: sortContent(sharedFrontPage.content),
  })

  return {
    props: { frontPage, feeds: feeds.slice(0, 10) },
  }
}

export default HomePage
