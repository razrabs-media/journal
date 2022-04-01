import { VFC } from 'react'
import { DateAgo, GridArea, Typography } from 'shared/ui'
import { Card } from './styled'
import type { Props } from './types'

export const CenteredCard: VFC<Props> = ({ title, publicationDate }) => (
  <Card>
    <GridArea area='title'>
      <Typography uppercase size='large' align='center' weight='500'>
        {title}
      </Typography>
    </GridArea>

    <GridArea area='date'>
      <DateAgo date={publicationDate} />
    </GridArea>
  </Card>
)

export type { Props as CenteredCardProps }
