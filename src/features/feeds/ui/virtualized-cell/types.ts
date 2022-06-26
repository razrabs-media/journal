import { MutableRefObject } from 'react'
import { CellMeasurerCache, ListRowProps } from 'react-virtualized'

export type Props = {
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
