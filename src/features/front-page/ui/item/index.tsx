import styled from '@emotion/styled'
import Link from 'next/link'
import { forwardRef, useMemo } from 'react'
import { PostCard } from 'entities/posts'
import { MediaScreen, Mobile, TabletAndAbove } from 'shared/ui/theme/responsive'
import { propsAdapter } from '../../lib/props-adapter'
import { CARD_BY_VARIANT, CardVariant } from '../../model'
import { Position, Props } from './types'

export const FrontPageItemWrapper = styled(Link)<Position>`
  // Для десктопов сетка 4 колонки
  grid-column: ${({ x, w }) => `${x + 1} / ${x + 1 + w}`};
  grid-row: ${({ y, h }) => `${y + 1} / ${y + 1 + h}`};
  display: block;

  // Для планшетов сетка 2 колонки
  // Если ширина элемента больше двух - он должен занять всю строку
  // Иначе пускай CSS-Grid сам решает расстановку через "grid-auto-flow" (см. shared/ui/grid)
  ${MediaScreen.desktopAndBelow} {
    grid-column: ${({ w }) => (w >= 2 ? `1/3` : `auto`)};
    grid-row: auto;
  }

  // Для мобильных сетка 1 колонка
  ${MediaScreen.mobile} {
    grid-column: 1;
    grid-row: auto;
  }
`

export const FrontPageItem = forwardRef<HTMLDivElement, Props>(
  ({ variant, postProps, as, ...position }) => {
    const PostComponent = useMemo(
      () => CARD_BY_VARIANT[variant as CardVariant] || PostCard,
      [variant],
    )

    const props = useMemo(() => propsAdapter(postProps), [postProps])

    return (
      <FrontPageItemWrapper href={`post/${postProps.uid}`} {...position}>
        <TabletAndAbove>
          <PostComponent {...props} />
        </TabletAndAbove>

        <Mobile>
          <PostComponent {...props} small />
        </Mobile>
      </FrontPageItemWrapper>
    )
  },
)

FrontPageItem.displayName = 'FrontPageItem'
