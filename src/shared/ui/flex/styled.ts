import styled from '@emotion/styled'
import { Props } from './types'

export const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  gap: ${({ gap }) => `${gap ?? 0}px`};
`
