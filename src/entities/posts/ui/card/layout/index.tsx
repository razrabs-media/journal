import { forwardRef } from 'react'
import type { ElementType, ReactNode } from 'react'

import {
  AdditionalInfoWrapper,
  ChiefBadgeWrapper,
  Content,
  Info,
  StyledCard,
} from './styled'

type LayoutProps = {
  as?: ElementType
  className?: string

  preview: ReactNode
  title: ReactNode
  chiefBadge?: ReactNode
  date: ReactNode
  additionalInfo?: ReactNode
}

export const Layout = forwardRef<HTMLDivElement, LayoutProps>((props, ref) => {
  const { preview, title, date, chiefBadge, additionalInfo, ...restProps } =
    props

  return (
    <StyledCard ref={ref} {...restProps}>
      {preview}

      <Content>
        {title}

        <Info>
          {chiefBadge && <ChiefBadgeWrapper>{chiefBadge}</ChiefBadgeWrapper>}

          {date}

          {additionalInfo && (
            <AdditionalInfoWrapper>{additionalInfo}</AdditionalInfoWrapper>
          )}
        </Info>
      </Content>
    </StyledCard>
  )
})

Layout.displayName = 'PostCardLayout'
