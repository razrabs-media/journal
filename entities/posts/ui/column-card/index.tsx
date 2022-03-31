import Link from 'next/link'
import { VFC } from 'react'
import { GridAria, Image, Typography } from 'shared/ui'
import { DateAgo } from '../date-ago'
import { ColumnGrid } from '../grid'
import { Props } from './types'

export const ColumnCard: VFC<Props> = ({
  uid,
  title,
  previewUrl,
  publicationDate,
}) => (
  <Link passHref href={`/post/${uid}`}>
    <ColumnGrid>
      <GridAria area='preview'>
        <Image alt={title} src={previewUrl} />
      </GridAria>
      <GridAria area='title'>
        <Typography uppercase size='medium' weight='500'>
          {title}
        </Typography>
      </GridAria>
      <GridAria area='date'>
        <DateAgo date={publicationDate} />
      </GridAria>
    </ColumnGrid>
  </Link>
)
