import { VFC } from 'react'
import { GridAria, Image, Typography, DateAgo } from 'shared/ui'
import { Card } from './styled'
import type { Props } from './types'

export const DefaultCard: VFC<Props> = ({
  title,
  previewUrl,
  publicationDate,
}) => (
  <Card>
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
  </Card>
)

export type { Props as DefaultCardProps }
