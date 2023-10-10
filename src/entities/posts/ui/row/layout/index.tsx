import type { ElementType, ReactNode } from 'react'
import { forwardRef } from 'react'
import { SizeProps } from '../../types'

import {
  AdditionalInfoWrapper,
  ChiefBadgeWrapper,
  Content,
  Info,
  StyledRow,
} from './styled'

type LayoutProps = {
  as?: ElementType
  className?: string

  preview: ReactNode
  title: ReactNode
  chiefBadge?: ReactNode
  date: ReactNode
  additionalInfo?: ReactNode
} & SizeProps

export const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  (
    { preview, title, date, chiefBadge, additionalInfo, small, ...restProps },
    ref,
  ) => (
    <StyledRow ref={ref} small={small} {...restProps}>
      {preview}

      <Content small={small}>
        {title}

        <Info>
          {chiefBadge && <ChiefBadgeWrapper>{chiefBadge}</ChiefBadgeWrapper>}
          {date}

          {additionalInfo && (
            <AdditionalInfoWrapper>{additionalInfo}</AdditionalInfoWrapper>
          )}
        </Info>
      </Content>
    </StyledRow>
  ),
)
Layout.displayName = 'PostRowLayout'
