import styled from '@emotion/styled'
import type { FC } from 'react'
import { forwardRef } from 'react'
import { Typography } from 'shared/ui/typography'
import { BadgeProps, StyleBadgeProps } from './types'

const StyledBadge = styled(Typography)<StyleBadgeProps>(({
  theme,
  wide,
  color,
  margin,
  variant,
}) => {
  const geometryCss = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: 'fit-content',
    height: '24px',
    padding: wide ? '6px 12px' : '6px 8px',
    margin: margin ? margin : '0',
    boxSizing: 'border-box' as const,
  }

  let colorCss = {}

  switch (color) {
    case 'primary':
      colorCss = {
        color: theme.colors.contrastPrimary,
        backgroundColor: theme.colors.primary,
      }
      break
    case 'secondary':
      colorCss = {
        color: theme.colors.secondary,
        backgroundColor: theme.colors.contrastSecondary,
      }
      break
    case 'brand':
      colorCss = {
        color: theme.colors.primary,
        backgroundColor: theme.colors.brand,
      }
      break
  }

  const baseCss = {
    ...geometryCss,
    ...colorCss,
  }

  const outlineVariantCss = {
    ...baseCss,
    background: 'none',
    border: '1px solid currentColor',
  }

  return variant === 'outline' ? outlineVariantCss : baseCss
})

const Badge: FC<BadgeProps> = forwardRef<any, BadgeProps>(
  ({ as = 'span', children, ...props }, ref) => (
    <StyledBadge uppercase as={as} ref={ref} size='sm' {...props}>
      {children}
    </StyledBadge>
  ),
)
Badge.defaultProps = {
  color: 'secondary',
  letterSpacing: 1,
}

Badge.displayName = 'Badge'

export default Badge
