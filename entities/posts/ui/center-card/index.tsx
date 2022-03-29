import Link from 'next/link'
import { VFC } from 'react'
import { GridAria, Typography } from 'shared/ui'
import { Props } from './types'
import { DateAgo } from '../date-ago'
import { CenterGrid } from '../grid'

export const CenterCard: VFC<Props> = ({ uid, title, publicationDate }) => (
  <Link passHref href={`/post/${uid}`}>
    <CenterGrid>
      <GridAria area='title'>
        <Typography uppercase size='large' weight='500'>
          {title}
        </Typography>
      </GridAria>
      <GridAria area='date'>
        <DateAgo date={publicationDate} />
      </GridAria>
    </CenterGrid>
  </Link>
)
