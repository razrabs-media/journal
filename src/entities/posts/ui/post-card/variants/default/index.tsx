import { FC } from 'react'
import { GridArea, Typography } from 'shared/ui'
import type { PostData } from '../../types'
import { Card, Date, Preview, TitleGridArea } from './styled'

export const DefaultCard: FC<PostData> = ({
  variant,
  title,
  previewUrl,
  publicationDate,
}) => (
  <Card variant={variant}>
    <GridArea area='preview'>
      <Preview alt={title} src={previewUrl} variant={variant} />
    </GridArea>

    <TitleGridArea area='title'>
      <Typography uppercase size='medium' weight='500'>
        {title}
      </Typography>

      <Date date={publicationDate} />
    </TitleGridArea>
  </Card>
)
