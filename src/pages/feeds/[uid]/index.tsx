import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import {
  FeedContainer,
  FeedSelector,
  GetFeeds,
  GetFeedsQuery,
  MainFeedPost,
} from 'features/feeds'
import { Recommendation } from 'features/feeds/ui/container'
import { PostCard, PostType } from 'entities/posts'
import {
  PostsByFeed,
  PostsByFeedQuery,
  PostsByRecommendation,
} from 'entities/posts'
import { FeedItem, initializeApollo } from 'shared/api'
import { Helmet } from 'shared/lib/helmet'
import { useIsLargeDesktopAndAbove } from 'shared/ui/theme/responsive'
import { Grid } from 'shared/ui/unstable_grid'

type Post = PostsByFeed['postsByFeed']['items'][0]

type Props = {
  postsByFeed: Post[]
  currentFeedUid: string
  feeds: Pick<FeedItem, 'uid' | 'name'>[]
  currentFeedName?: string
  recommendation: Post[]
}

const desktopPreviewProps = {
  width: 100,
  height: 100,
} as const

const FeedPage: NextPage<Props> = ({
  postsByFeed,
  currentFeedUid,
  currentFeedName,
  feeds,
  recommendation,
}) => {
  const largeDesktopAndAbove = useIsLargeDesktopAndAbove()
  const mainFeedRecommendation = !largeDesktopAndAbove && {
    beforeElementIndex: 2,
    divider: true,
    render: () => <Recommendation posts={recommendation} />,
  }

  return (
    <>
      <Helmet title={currentFeedName} />
      <FeedSelector activeFeedUid={currentFeedUid} feeds={feeds} />
      <Grid container justifyContent={{ xs: 'center', lg: 'space-between' }}>
        <Grid lg={8} xs={12}>
          <FeedContainer
            incut={mainFeedRecommendation || undefined}
            items={postsByFeed}
            renderItem={(post) => <MainFeedPost {...post} />}
            spacingBetweenItems={4}
            title={currentFeedName}
          />
        </Grid>
        {largeDesktopAndAbove && (
          <Grid xs={3}>
            <FeedContainer
              items={recommendation}
              renderItem={(post) => (
                <Link href={`/post/${post.uid}`}>
                  <PostCard
                    {...post}
                    noDisplayDate
                    preview={post.previewUrl || ''}
                    previewProps={desktopPreviewProps}
                    type={PostType.Article}
                  />
                </Link>
              )}
              spacingBetweenItems={3}
              title='Может быть интересно'
            />
          </Grid>
        )}
      </Grid>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const currentFeedUid: string = query.uid?.toString() ?? ''
  const apolloClient = initializeApollo()

  const [postsByFeed, feedsData, postsByRecommendation] = await Promise.all([
    apolloClient.query<PostsByFeed>({
      variables: { uid: currentFeedUid, perPage: 250 },
      query: PostsByFeedQuery,
    }),
    apolloClient.query<GetFeeds>({
      query: GetFeedsQuery,
    }),
    apolloClient.query<typeof PostsByRecommendation>({
      query: PostsByRecommendation,
      variables: { type: 'Feed', count: 4, uid: currentFeedUid },
    }),
  ])

  const { feeds } = feedsData.data
  const [currentFeed] = feeds.filter(({ uid }) => uid === currentFeedUid)

  return {
    props: {
      postsByFeed: postsByFeed.data.postsByFeed.items,
      feeds: feeds.slice(0, 10),
      currentFeedUid,
      currentFeedName: currentFeed.name,
      recommendation: postsByRecommendation.data.recommendation,
    },
  }
}

export default FeedPage
