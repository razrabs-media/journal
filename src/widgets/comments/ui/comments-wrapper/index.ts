import styled from '@emotion/styled'
import { Props } from './types'

export const CommentsWrapper = styled.div<Props>`
  display: grid;

  grid-template:
    'header' auto
    'content' 1fr
    'action' auto /
    1fr;

  background: ${({ theme }) => theme.colors.backgroundSecondary};
`
