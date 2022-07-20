import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Props } from './types'

export const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};

  & > * {
    ${({ direction, gap }) =>
      direction === 'column'
        ? css`
            margin-bottom: ${gap ?? 0}px;
          `
        : css`
            margin-right: ${gap ?? 0}px;
          `}

    &:last-child {
      ${({ direction }) =>
        direction === 'column'
          ? css`
              margin-bottom: 0;
            `
          : css`
              margin-right: 0;
            `}
    }
  }
`
