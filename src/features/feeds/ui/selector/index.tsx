import Link from 'next/link'
import { FC } from 'react'
import { FeedBadge, FeedsContainer } from './styled'
import { FeedsSelectorProps } from './types'

export const FeedSelector: FC<FeedsSelectorProps> = ({
  activeFeedUid,
  feeds,
}) => (
  <FeedsContainer>
    {feeds.map(({ uid, name }) => (
      <Link key={uid} passHref href={`/feeds/${uid}`}>
        <FeedBadge active={activeFeedUid === uid} as='a'>
          {name}
        </FeedBadge>
      </Link>
    ))}
  </FeedsContainer>
)
