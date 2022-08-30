import { GetServerSideProps } from 'next'
import { getServerSideSitemapIndex } from 'next-sitemap'
import { GetFeeds, GetFeedsQuery } from 'features/feeds'
import { initializeApollo } from 'shared/api'
import { getHost } from 'shared/lib'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const host = getHost()
  const apolloClient = initializeApollo()
  const {
    data: { feeds },
  } = await apolloClient.query<GetFeeds>({
    query: GetFeedsQuery,
  })

  const feedUIDs = feeds.map(({ uid }: { uid: string }) => uid)

  return getServerSideSitemapIndex(ctx, [
    ...feedUIDs.map((uid: string) => `${host}/feeds/${uid}/sitemap.xml`),
  ])
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function FeedsSitemap() {}
