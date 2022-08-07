import { GetServerSideProps } from 'next'
import { getServerSideSitemapIndex } from 'next-sitemap'
import getConfig from 'next/config'
import { GetFeeds, GetFeedsQuery } from 'features/feeds'
import { initializeApollo } from 'shared/api'

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const isServerSide = typeof window === 'undefined'
  const host = (isServerSide ? serverRuntimeConfig : publicRuntimeConfig).HOST
  const apolloClient = initializeApollo()
  const {
    data: { feeds },
  } = await apolloClient.query<GetFeeds>({
    query: GetFeedsQuery,
  })

  const feedUIDs = feeds.map(({ uid }) => uid)

  return getServerSideSitemapIndex(ctx, [
    ...feedUIDs.map((uid) => `${host}/feeds/${uid}`),
  ])
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Sitemap() {}
