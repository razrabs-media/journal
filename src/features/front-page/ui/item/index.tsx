import styled from '@emotion/styled'
import { VFC } from 'react'
import { Position, Props } from './types'

const FrontPageItemWrapper = styled.div<Position>`
  // Для десктопов сетка 4 колонки
  grid-column: ${({ x, w }) => `${x + 1} / ${x + 1 + w}`};
  grid-row: ${({ y, h }) => `${y + 1} / ${y + 1 + h}`};

  // Для планшетов сетка 2 колонки
  // Если ширина элемента больше двух - он должен занять всю строку
  // Иначе пускай CSS-Grid сам решает расстановку через "grid-auto-flow" (см. shared/ui/grid)
  @media screen and (max-width: 1320px) {
    grid-column: ${({ w }) => (w >= 2 ? `1/3` : `auto`)};
    grid-row: auto;
  }

  // Для мобильных сетка 1 колонка
  @media screen and (max-width: 671px) {
    grid-column: 1;
    grid-row: auto;
  }
`

export const FrontPageItem: VFC<Props> = ({ component, ...position }) => (
  <FrontPageItemWrapper {...position}>{component}</FrontPageItemWrapper>
)
