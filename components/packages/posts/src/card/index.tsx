import Typography from '@razrabs-ui/typography'
import { forwardRef } from 'react'

import { ChiefBadge } from '../common/components'
import { useAdditionalComponent } from '../common/hooks'
import { PostProps } from '../types'
import { Layout } from './layout'
import { Preview } from './preview'

export const PostCard = forwardRef<HTMLDivElement, PostProps>((props, ref) => {
  const {
    type,
    title,
    preview,
    date,
    contentMeta,
    chiefPost,
    small,
    ...restProps
  } = props

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
          size={small ? 'xs' : 'sm'}
        >
          {date}
        </Typography>
      }
      preview={<Preview alt={title} preview={preview} type={type} />}
      ref={ref}
      title={
        <Typography
          uppercase
          as='h2'
          className='title'
          size={small ? 'md' : 'xl'}
          weight='medium'
        >
          {title}
        </Typography>
      }
      {...restProps}
    />
  )
})

PostCard.displayName = 'PostCard'
