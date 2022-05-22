import { FC } from 'react'
import { DateAgo, GridArea, Typography } from 'shared/ui'
import type { PostData } from '../../types'
import { Card } from './styled'

export const CenteredCard: FC<PostData> = ({ title, publicationDate }) => (
  <Card>
    <GridArea area='title'>
      <Typography uppercase align='center' size='xlarge' weight='500'>
        {title}
      </Typography>
    </GridArea>

    <GridArea area='date'>
      <DateAgo date={publicationDate} />
    </GridArea>
  </Card>
)
