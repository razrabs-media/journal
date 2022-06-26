import { useQuery } from '@apollo/client'
import { useIsMobile } from '@razrabs-ui/responsive'
import type { GetServerSideProps, NextPage } from 'next'
import { useRef, useState } from 'react'
import {
  AutoSizer,
  CellMeasurerCache,
  Index,
  IndexRange,
  InfiniteLoader,
  List,
  WindowScroller,
} from 'react-virtualized'
import {
  FeedContainer,
  FeedSelector,
  FeedVirtualizedCell,
  GetFeeds,
  GetFeedsQuery,
} from 'features/feeds'
import { GetPostsByFeed, GetPostsByFeedQuery } from 'entities/posts'
import { FeedItem, initializeApollo, Post } from 'shared/api'
import { Helmet } from 'shared/lib/helmet'

type Props = {
  postsByFeed: Pick<Post, 'uid' | 'title' | 'previewUrl' | 'createdAt'>[]
  currentFeedUid: string
  feeds: Pick<FeedItem, 'uid' | 'name'>[]
  total: number
}

const FeedPage: NextPage<Props> = ({
  currentFeedUid,
  feeds,
  total,
  postsByFeed,
}) => {
  const smallRow = useIsMobile()
  const [rangeCache, setRangeCache] = useState<number[]>([-1, -1])

  const {
    data = { postsByFeed: { items: postsByFeed, count: total } },
    fetchMore,
  } = useQuery<GetPostsByFeed>(GetPostsByFeedQuery, {
    notifyOnNetworkStatusChange: true,
    ssr: false,
    variables: {
      uid: currentFeedUid,
      page: 1,
      perPage: 10,
    },
    fetchPolicy: 'network-only',
  })

  const isRowLoaded = ({ index }: Index): boolean =>
    !!data.postsByFeed.items[index]

  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 650,
    }),
  )

  const handleLoadMoreRows = async ({ startIndex, stopIndex }: IndexRange) => {
    await fetchMore({
      variables: {
        page: Math.ceil(stopIndex / 10),
        perPage: 10,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log('fetchMoreResult', fetchMoreResult)
        return {
          ...prev,
          __typename: fetchMoreResult.__typename,
          postsByFeed: {
            items: [
              ...prev.postsByFeed.items,
              ...fetchMoreResult.postsByFeed.items,
            ],
            __typename: fetchMoreResult.postsByFeed.__typename,
            count: fetchMoreResult.postsByFeed.count,
          },
        }
      },
    })
  }
  return (
    <>
      <Helmet />

      <FeedSelector activeFeedUid={currentFeedUid} feeds={feeds} />

      <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={handleLoadMoreRows}
        minimumBatchSize={10}
        rowCount={total}
        treshold={10}
      >
        {({ onRowsRendered }) => (
          <WindowScroller>
            {({ height, scrollTop }) => (
              <AutoSizer disableHeight>
                {({ width }) => (
                  <FeedContainer small={smallRow}>
                    <List
                      autoHeight
                      data={data}
                      deferredMeasurementCache={cache.current}
                      height={height}
                      overscanRowCount={5}
                      rowCount={data.postsByFeed.items.length}
                      rowHeight={cache.current.rowHeight}
                      rowRenderer={(props) => (
                        <FeedVirtualizedCell
                          cacheRef={cache}
                          postData={data.postsByFeed.items[props.index]}
                          props={props}
                          smallRow={smallRow}
                        />
                      )}
                      rowStyle={{ height }}
                      scrollTop={scrollTop}
                      width={width}
                      onRowsRendered={onRowsRendered}
                    />
                  </FeedContainer>
                )}
              </AutoSizer>
            )}
          </WindowScroller>
        )}
      </InfiniteLoader>
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
      postsByFeed: { items: postsByFeed, count },
    },
  } = await apolloClient.query<GetPostsByFeed>({
    variables: { uid: currentFeedUid, page: 1, perPage: 10 },
    query: GetPostsByFeedQuery,
    fetchPolicy: 'no-cache',
  })

  const {
    data: { feeds },
  } = await apolloClient.query<GetFeeds>({
    query: GetFeedsQuery,
    fetchPolicy: 'no-cache',
  })

  return {
    props: {
      postsByFeed,
      feeds,
      total: count,
      currentFeedUid,
    },
  }
}

export default FeedPage
