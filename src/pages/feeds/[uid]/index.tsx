import { useApolloClient, useQuery } from '@apollo/client'
import { PostRow, PostType } from '@razrabs-ui/posts'
import { useIsMobile } from '@razrabs-ui/responsive'
import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { CSSProperties, useRef, useState } from 'react'
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  Index,
  IndexRange,
  InfiniteLoader,
  List,
  WindowScroller,
} from 'react-virtualized'
import { MeasuredCellParent } from 'react-virtualized/dist/es/CellMeasurer'
import {
  FeedContainer,
  FeedSelector,
  GetFeeds,
  GetFeedsQuery,
} from 'features/feeds'
import { GetPostsByFeed, GetPostsByFeedQuery } from 'entities/posts'
import { client, FeedItem, Post } from 'shared/api'
import { Helmet } from 'shared/lib/helmet'
import { parseDate } from 'shared/lib/parse-date'

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
  total: initialTotal,
}) => {
  const smallRow = useIsMobile()
  const [rangeCache, setRangeCache] = useState<number[]>([-1, -1])

  const providedClient = useApolloClient()

  const [total, setTotal] = useState<number>(initialTotal)

  const { data, fetchMore } = useQuery<GetPostsByFeed>(GetPostsByFeedQuery, {
    notifyOnNetworkStatusChange: true,
    client: providedClient,
    ssr: false,
    variables: {
      page: 1,
      perPage: 2,
    },
    fetchPolicy: 'network-only',
    onCompleted: (newValue) => {
      console.log('newValue', newValue)
    },
  })

  console.log(data)

  const isRowLoaded = ({ index }: Index): boolean => !!postsByFeed[index]

  console.log('postsByFeed', data)

  const rowRenderer = ({
    key,
    index,
    style,
    parent,
  }: {
    key: string
    index: number
    style: CSSProperties
    parent: MeasuredCellParent
  }) => {
    const postData = postsByFeed[index]

    return (
      <CellMeasurer
        key={key}
        cache={cache.current}
        columnIndex={0}
        parent={parent}
        rowIndex={index}
      >
        {({ registerChild }) => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <div ref={registerChild} style={style}>
            <Link key={postData.uid} passHref href={`/post/${postData.uid}`}>
              <PostRow
                as='a'
                date={parseDate(postData.createdAt as unknown as string) ?? ''}
                preview={postData.previewUrl ?? ''}
                small={smallRow}
                title={postData.title}
                type={PostType.Article}
              />
            </Link>
          </div>
        )}
      </CellMeasurer>
    )
  }

  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 650,
    }),
  )

  const handleLoadMoreRows = async ({ startIndex, stopIndex }: IndexRange) => {
    console.log('handle load')
    if (rangeCache[0] === startIndex || rangeCache[1] === stopIndex) {
      return
    }
    setRangeCache([startIndex, stopIndex])

    console.log('start index', startIndex)
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

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setData((prevState) => [...prevState, newPosts])
    setTotal(count)
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
                      rowRenderer={rowRenderer}
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
