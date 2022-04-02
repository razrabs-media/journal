import styled from '@emotion/styled'
import { VFC } from 'react'
import { Typography } from 'shared/ui'

const TagBackground = styled.div`
  padding: 6px 8px 4px 8px;
  background-color: ${({ theme }) => theme.colors.tag};
`

export const Tag: VFC<{ name: string }> = ({ name }) => (
  <TagBackground>
    <Typography uppercase color='secondary' size='small'>
      {name}
    </Typography>
  </TagBackground>
)
