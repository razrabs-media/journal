import Typography from '@razrabs-ui/typography'
import { forwardRef } from 'react'

import { ChiefBadge } from '../common/components'
import { useAdditionalComponent } from '../common/hooks'
import { Layout } from './layout'
import { Preview } from './preview'
import type { PostCardProps } from './types'

export const PostCard = forwardRef<HTMLDivElement, PostCardProps>(
  (props, ref) => {
    const { type, title, preview, date, contentMeta, chiefPost, ...restProps } =
      props

    // TODO: разобраться с типизацией (см @razrabs-ui/posts/types.ts)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const additionalInfo = useAdditionalComponent({ type, contentMeta })

    return (
      <Layout
        additionalInfo={additionalInfo}
        chiefBadge={chiefPost && <ChiefBadge />}
        date={
          <Typography
            uppercase
            as='span'
            color='secondary'
            letterSpacing={1}
            size='sm'
          >
            {date}
          </Typography>
        }
        preview={<Preview preview={preview} type={type} />}
        ref={ref}
        title={
          <Typography
            uppercase
            as='h2'
            className='title'
            size='xl'
            weight='medium'
          >
            {title}
          </Typography>
        }
        {...restProps}
      />
    )
  },
)

PostCard.displayName = 'PostCard'

export type { PostCardProps } from './types'
