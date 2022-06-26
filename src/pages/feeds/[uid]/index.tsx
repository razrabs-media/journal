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
import { client, FeedItem, Post } from 'shared/api'
import { Helmet } from 'shared/lib/helmet'

type Props = {
  postsByFeed: Pick<Post, 'uid' | 'title' | 'previewUrl' | 'createdAt'>[]
  currentFeedUid: string
  feeds: Pick<FeedItem, 'uid' | 'name'>[]
  total: number
}

const FeedPage: NextPage<Props> = ({
  currentFeedUid,
  postsByFeed,
  feeds,
  total,
}) => {
  const smallRow = useIsMobile()
  const [rangeCache, setRangeCache] = useState<number[]>([-1, -1])

  const { data, fetchMore } = useQuery<GetPostsByFeed>(GetPostsByFeedQuery, {
    notifyOnNetworkStatusChange: true,
    ssr: false,
    variables: {
      uid: currentFeedUid,
      page: 1,
      perPage: 2,
    },
    fetchPolicy: 'network-only',
  })

  const isRowLoaded = ({ index }: Index): boolean => !!postsByFeed[index]

  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 650,
    }),
  )

  const handleLoadMoreRows = async ({ startIndex, stopIndex }: IndexRange) => {
    if (rangeCache[0] === startIndex || rangeCache[1] === stopIndex) {
      return
    }
    setRangeCache([startIndex, stopIndex])

    const {
      data: {
        postsByFeed: { count, items },
      },
    } = await fetchMore({
      variables: {
        page: startIndex,
        perPage: 2,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log('fetchMoreResult', fetchMoreResult)
        return prev
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
                      overscanRowCount={2}
                      rowCount={postsByFeed.length}
                      rowHeight={cache.current.rowHeight}
                      rowRenderer={(props) => (
                        <FeedVirtualizedCell
                          cacheRef={cache}
                          postData={postsByFeed[props.index]}
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

  const {
    data: {
      postsByFeed: { items: postsByFeed, count },
    },
  } = await client.query<GetPostsByFeed>({
    variables: { uid: currentFeedUid, page: 1, perPage: 2 },
    query: GetPostsByFeedQuery,
    fetchPolicy: 'no-cache',
  })

  const {
    data: { feeds },
  } = await client.query<GetFeeds>({
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
