import {PostRow, PostType} from '@razrabs-ui/posts'
import Link from 'next/link'
import {MutableRefObject} from 'react'
import {CellMeasurer, CellMeasurerCache} from 'react-virtualized'
import {ListRowProps} from 'react-virtualized/dist/es/List'
import {parseDate} from 'shared/lib/parse-date'

type Props = {
  cacheRef: MutableRefObject<CellMeasurerCache>
  smallRow: boolean
  postData: {
    uid: string
    createdAt: string
    previewUrl?: string | null
    title: string
  }
  props: ListRowProps
}

export const FeedVirtualizedCell = ({
  cacheRef,
  smallRow,
  postData,
  props: { key, index, style, parent },
}: Props) => (
  <CellMeasurer
    key={key}
    cache={cacheRef.current}
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
            date={parseDate(postData.createdAt) ?? ''}
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
