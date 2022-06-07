import { FeedItem } from 'shared/api'

export type FeedsSelectorProps = {
  activeFeedUid?: string

  feeds: Pick<FeedItem, 'uid' | 'name'>[]
}
