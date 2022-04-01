import styled from '@emotion/styled'
import { VFC } from 'react'
import { GridAria, Typography, DateAgo } from 'shared/ui'

const Card = styled.div`
  display: grid;
  grid-template:
    '.' 1fr
    'title' auto
    'date' 1fr /
    1fr;
  justify-items: center;
  gap: 16px;
  border: 1px solid #ffffff;
  aspect-ratio: 4 / 1;
`

export type CenteredCardProps = {
  title: string
  publicationDate: number
}
export const CenteredCard: VFC<CenteredCardProps> = ({
  title,
  publicationDate,
}) => (
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
