import { PostRow, PostType } from '@razrabs-ui/posts'
import Link from 'next/link'
import { CellMeasurer } from 'react-virtualized'
import { parseDate } from 'shared/lib/parse-date'
import { Props } from './types'

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
