import styled from '@emotion/styled'
import { GridAreaProps, GridProps } from './types'

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ columns = 0, columnMinWidth = 0 }) =>
    `repeat(${columns}, minmax(${columnMinWidth}, 1fr))}`};

  gap: ${({ gap }) =>
    typeof gap === 'number'
      ? `${gap}px`
      : `${gap?.vertical || 0}px ${gap?.horizontal || 0}px`};
`

export const GridArea = styled.div<GridAreaProps>`
  display: grid;
  grid-area: ${({ area }) => area};
`

export const StickyGridArea = styled(GridArea)`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.background};
`
