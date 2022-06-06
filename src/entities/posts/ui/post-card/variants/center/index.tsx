import { Mobile, TabletAndAbove } from '@razrabs-ui/responsive'
import Typography from '@razrabs-ui/typography'
import { FC } from 'react'
import { DateAgo, GridArea } from 'shared/ui'
import type { PostData } from '../../types'
import { Card } from './styled'

export const CenteredCard: FC<PostData> = ({ title, publicationDate }) => (
  <Card>
    <GridArea area='title'>
      <TabletAndAbove>
        <Typography uppercase align='center' size='2xl' weight='medium'>
          {title}
        </Typography>
      </TabletAndAbove>

      <Mobile>
        <Typography uppercase align='center' size='xl' weight='medium'>
          {title}
        </Typography>
      </Mobile>
    </GridArea>

    <GridArea area='date'>
      <DateAgo date={publicationDate} />
    </GridArea>
  </Card>
)
