import { GetServerSideProps } from 'next'
import { getServerSideSitemap } from 'next-sitemap'
import { PostsByFeed, PostsByFeedQuery } from 'entities/posts'
import { initializeApollo } from 'shared/api'
import { getHost } from 'shared/lib'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const currentFeedUid: string = ctx.query.uid?.toString() ?? ''
  const host = getHost()
  const apolloClient = initializeApollo()

  const {
    data: {
      postsByFeed: { items: allPosts },
    },
  } = await apolloClient.query<PostsByFeed>({
    variables: { uid: currentFeedUid, perPage: 20 },
    query: PostsByFeedQuery,
  })

  return getServerSideSitemap(ctx, [
    { loc: `${host}/feeds/${currentFeedUid}` },
    ...allPosts.map(({ uid }) => ({ loc: `${host}/post/${uid}` })),
  ])
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function FeedSitemap() {}
