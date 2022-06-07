import { ElementType, forwardRef, ReactNode } from 'react'
import { SizeProps } from '../../types'
import { StyledCard } from './styled'

type LayoutProps = {
  as?: ElementType
  className?: string

  title: ReactNode
  chiefBadge?: ReactNode
  date: ReactNode
  additionalInfo?: ReactNode
} & SizeProps

export const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  ({ as, className, title, chiefBadge, date, small }, ref) => (
    <StyledCard as={as} className={className} ref={ref} small={small}>
      {chiefBadge}

      {title}

      {date}
    </StyledCard>
  ),
)

Layout.displayName = 'PostOutlineLayout'
