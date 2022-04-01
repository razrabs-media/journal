import styled from '@emotion/styled'

type GridProps = {
  columns?: number
  columnMinWidth?: number

  gap?: number | { vertical?: number; horizontal: number }
}
export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ columns = 0, columnMinWidth = 0 }) =>
    `repeat(${columns}, minmax(${columnMinWidth}, 1fr))}`};

  gap: ${({ gap }) =>
    typeof gap === 'number'
      ? `${gap}px`
      : `${gap?.vertical || 0}px ${gap?.horizontal || 0}px`};
`
