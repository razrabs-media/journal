import Typography from '@razrabs-ui/typography'
import { forwardRef } from 'react'
import { ChiefBadge } from '../common/components'
import { Layout } from './layout'
import { PostOutlineCardProps } from './types'

export const PostOutlineCard = forwardRef<HTMLDivElement, PostOutlineCardProps>(
  ({ as, className, title, chiefPost, date, small }, ref) => (
    <Layout
      as={as}
      chiefBadge={chiefPost && <ChiefBadge />}
      className={className}
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
      ref={ref}
      small={small}
      title={
        <Typography
          uppercase
          align='center'
          as='h2'
          className='title'
          size={small ? '2xl' : '3xl'}
          weight='medium'
        >
          {title}
        </Typography>
      }
    />
  ),
)

PostOutlineCard.displayName = 'PostOutlineCard'
