import styled from '@emotion/styled'
import { MediaScreen } from 'shared/ui/theme/responsive'
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

export const MainGrid = styled.div`
  display: grid;
  grid-area: main;
  grid-template-columns: 100%;
  grid-template-rows: 54px 1fr auto;
  row-gap: 24px;
  overflow: hidden;
  max-width: 1552px;
  margin: 0 auto;

  ${MediaScreen.mobile} {
    /* row-gap: 10px; */
  }
`
