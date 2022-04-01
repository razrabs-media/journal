import { VFC } from 'react'
import { DateAgo, GridAria, Typography } from 'shared/ui'
import { Card } from './styled'
import type { Props } from './types'

export const CenteredCard: VFC<Props> = ({ title, publicationDate }) => (
  <Card>
    <GridAria area='title'>
      <Typography uppercase size='large' weight='500'>
        {title}
      </Typography>
    </GridAria>

    <GridAria area='date'>
      <DateAgo date={publicationDate} />
    </GridAria>
  </Card>
)

export type { Props as CenteredCardProps }
