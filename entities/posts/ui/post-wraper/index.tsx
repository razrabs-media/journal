import styled from '@emotion/styled'
import { Props } from './types'

// todo сократить, когда бэк допилят
export const PostWrapper = styled.div<Props>`
  grid-column: ${({ x }) => x + 1};
  grid-column-start: ${({ x }) => x + 1};
  grid-column-end: ${({ x, w }) => x + 1 + w};

  grid-row: ${({ y }) => y + 1};
  grid-row-start: ${({ y }) => y + 1};
  grid-row-end: ${({ y, h }) => y + 1 + h};
`
