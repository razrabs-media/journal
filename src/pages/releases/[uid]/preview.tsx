import type { GetServerSideProps } from 'next'
import {
  SharedFrontPage,
  SharedFrontPageQuery,
  sortContent,
} from 'features/front-page'
import { client } from 'shared/api'
import HomePage from '../../index'

type Props = {
  frontPage?: SharedFrontPage['sharedFrontPage']
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const {
    data: { sharedFrontPage },
  } = await client.query<SharedFrontPage>({
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
