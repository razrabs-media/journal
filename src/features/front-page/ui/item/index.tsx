import styled from '@emotion/styled'
import { PostCard } from '@razrabs-ui/posts'
import { Mobile, TabletAndAbove } from '@razrabs-ui/responsive'
import { forwardRef, useMemo } from 'react'
import { propsAdapter } from '../../lib/props-adapter'
import { CARD_BY_VARIANT, CardVariant } from '../../model'
import { Position, Props } from './types'

export const FrontPageItemWrapper = styled.a<Position>`
  // Для десктопов сетка 4 колонки
  grid-column: ${({ x, w }) => `${x + 1} / ${x + 1 + w}`};
  grid-row: ${({ y, h }) => `${y + 1} / ${y + 1 + h}`};

  // Для планшетов сетка 2 колонки
  // Если ширина элемента больше двух - он должен занять всю строку
  // Иначе пускай CSS-Grid сам решает расстановку через "grid-auto-flow" (см. shared/ui/grid)
  @media screen and (max-width: ${({ theme }) =>
      `${parseInt(theme.breakpoints.lg) - 1}px`}) {
    grid-column: ${({ w }) => (w >= 2 ? `1/3` : `auto`)};
    grid-row: auto;
  }

  // Для мобильных сетка 1 колонка
  @media screen and (max-width: ${({ theme }) =>
      `${parseInt(theme.breakpoints.sm) - 1}px`}) {
    grid-column: 1;
    grid-row: auto;
  }
`

export const FrontPageItem = forwardRef<HTMLAnchorElement, Props>(
  ({ variant, postProps, ...position }, ref) => {
    const PostComponent = useMemo(
      () => CARD_BY_VARIANT[variant as CardVariant] || PostCard,
      [variant],
    )

    const props = useMemo(() => propsAdapter(postProps), [postProps])

    return (
      <FrontPageItemWrapper ref={ref} {...position}>
        <TabletAndAbove>
          <PostComponent {...props} />
        </TabletAndAbove>

        <Mobile>
          <PostComponent {...props} mobile />
        </Mobile>
      </FrontPageItemWrapper>
    )
  },
)

FrontPageItem.displayName = 'FrontPageItem'
