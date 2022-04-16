import { VFC } from 'react'
import { DateAgo, GridArea, Typography } from 'shared/ui'
import type { PostData } from '../../types'
import { Card, Preview } from './styled'

export const DefaultCard: VFC<PostData> = ({
  variant,
  title,
  previewUrl,
  publicationDate,
}) => (
  <Card>
    <GridArea area='preview'>
      <Preview alt={title} src={previewUrl} variant={variant} />
    </GridArea>
    <GridArea area='title'>
      <Typography uppercase size='medium' weight='500'>
        {title}
      </Typography>
    </GridArea>
    <GridArea area='date'>
      <DateAgo date={publicationDate} />
    </GridArea>
  </Card>
)
