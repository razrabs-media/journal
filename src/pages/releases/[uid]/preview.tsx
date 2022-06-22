import type { GetServerSideProps } from 'next'
import HomePage from 'pages'
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
  if (!sharedFrontPage) return { props: {} }

  const frontPage = Object.assign({}, sharedFrontPage, {
    content: sortContent(sharedFrontPage.content),
  })

  return {
    props: { frontPage },
  }
}

export default HomePage
