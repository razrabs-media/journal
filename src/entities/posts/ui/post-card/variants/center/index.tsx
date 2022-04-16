import { VFC } from 'react'
import { DateAgo, GridArea, Typography } from 'shared/ui'
import type { PostData } from '../../types'
import { Card } from './styled'

export const CenteredCard: VFC<PostData> = ({ title, publicationDate }) => (
  <Card>
    <GridArea area='title'>
      <Typography uppercase align='center' size='large' weight='500'>
        {title}
      </Typography>
    </GridArea>

    <GridArea area='date'>
      <DateAgo date={publicationDate} />
    </GridArea>
  </Card>
)
