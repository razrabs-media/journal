import { GetServerSideProps } from 'next'
import { getServerSideSitemapIndex } from 'next-sitemap'
import getConfig from 'next/config'
import { GetFeeds, GetFeedsQuery } from 'features/feeds'
import { PostsByFeed, PostsByFeedQuery } from 'entities/posts'
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

  const allPostsPromise = await Promise.all(
    feedUIDs.map((uid) =>
      apolloClient.query<PostsByFeed>({
        variables: { uid, perPage: 20 },
        query: PostsByFeedQuery,
      }),
    ),
  )

  const allPostsUIDs = allPostsPromise
    .map((postsResponse) => postsResponse.data.postsByFeed.items)
    .flat()
    .map(({ uid }) => uid)

  return getServerSideSitemapIndex(ctx, [
    ...allPostsUIDs.map((uid) => `${host}/post/${uid}`),
  ])
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Sitemap() {}
