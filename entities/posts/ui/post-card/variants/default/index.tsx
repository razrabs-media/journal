import { VFC } from 'react'
import { GridArea, Image, Typography, DateAgo } from 'shared/ui'
import { Card } from './styled'
import type { Props } from './types'

export const DefaultCard: VFC<Props> = ({
  title,
  previewUrl,
  publicationDate,
}) => (
  <Card>
    <GridArea area='preview'>
      <Image alt={title} src={previewUrl} />
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

export type { Props as DefaultCardProps }
