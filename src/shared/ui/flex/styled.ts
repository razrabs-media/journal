import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Props } from './types'

export const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};

  ${({ direction, gap }) => css`
    & > * {
      ${direction === 'column'
        ? `margin-bottom: ${gap ?? 0}px;`
        : `margin-right: ${gap ?? 0}px;`}

      &:last-child {
        ${direction === 'column' ? 'margin-bottom: 0;' : 'margin-right: 0;'}
      }
    }
  `}
`
