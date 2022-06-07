import Typography from '@razrabs-ui/typography'
import { forwardRef, useMemo } from 'react'

import { ChiefBadge } from '../common/components'
import { useAdditionalComponent } from '../common/hooks'
import { Layout } from './layout'
import { DefaultPreview, SmallPreview } from './preview'
import type { PostRowProps } from './types'

export const PostRow = forwardRef<HTMLDivElement, PostRowProps>(
  (props, ref) => {
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

    const Preview = useMemo(
      () => (small ? SmallPreview : DefaultPreview),
      [small],
    )

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
        small={small}
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
  },
)

PostRow.displayName = 'PostRow'

export type { PostRowProps } from './types'
