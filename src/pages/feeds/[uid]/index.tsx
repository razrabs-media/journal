import { PostRow, PostType } from '@razrabs-ui/posts'
import { useIsMobile } from '@razrabs-ui/responsive'
import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import {
  FeedContainer,
  FeedSelector,
  GetFeeds,
  GetFeedsQuery,
} from 'features/feeds'
import { PostsByFeed, PostsByFeedQuery } from 'entities/posts'
import { FeedItem, initializeApollo, Post } from 'shared/api'
import { Helmet } from 'shared/lib/helmet'
import { parseDate } from 'shared/lib/parse-date'

type Props = {
  postsByFeed: Pick<Post, 'uid' | 'title' | 'previewUrl' | 'createdAt'>[]
  currentFeedUid: string
  feeds: Pick<FeedItem, 'uid' | 'name'>[]
  currentFeedName?: string
}

const FeedPage: NextPage<Props> = ({
  postsByFeed,
  currentFeedUid,
  currentFeedName,
  feeds,
}) => {
  const smallRow = useIsMobile()

  return (
    <>
      <Helmet title={currentFeedName} />

      <FeedSelector activeFeedUid={currentFeedUid} feeds={feeds} />

      <FeedContainer small={smallRow}>
        {postsByFeed.map((post) => (
          <Link key={post.uid} passHref href={`/post/${post.uid}`}>
            <PostRow
              as='a'
              date={parseDate(post.createdAt as unknown as string) ?? ''}
              preview={post.previewUrl ?? ''}
              small={smallRow}
              title={post.title}
              type={PostType.Article}
            />
          </Link>
        ))}
      </FeedContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const currentFeedUid: string = query.uid?.toString() ?? ''
  const apolloClient = initializeApollo()

  const {
    data: {
      postsByFeed: { items: postsByFeed },
    },
  } = await apolloClient.query<PostsByFeed>({
    variables: { uid: currentFeedUid, perPage: 250 },
    query: PostsByFeedQuery,
  })

  const {
    data: { feeds },
  } = await apolloClient.query<GetFeeds>({
    query: GetFeedsQuery,
  })

  const [currentFeed] = feeds.filter(({ uid }) => uid === currentFeedUid)

  return {
    props: {
      postsByFeed,
      feeds: feeds.slice(0, 10),
      currentFeedUid,
      currentFeedName: currentFeed?.name,
    },
  }
}

export default FeedPage
