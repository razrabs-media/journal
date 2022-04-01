import styled from '@emotion/styled'
import { VFC } from 'react'
import { GridAria, Image, Typography, DateAgo } from 'shared/ui'

const Card = styled.div`
  position: relative;
  cursor: pointer;
  display: grid;
  grid-template:
    'preview' auto
    'title' auto
    'date' auto /
    1fr;
  gap: 8px;
`

export type DefaultCardProps = {
  previewUrl?: string
  title: string
  publicationDate: number
}

export const DefaultCard: VFC<DefaultCardProps> = ({
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
