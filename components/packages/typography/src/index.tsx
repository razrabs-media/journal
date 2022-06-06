import styled from '@emotion/styled'

import type { Alignment, Color, Size, TypographyProps, Weight } from './types'

const defaultProps = {
  size: 'lg' as Size,
  color: 'primary' as Color,
  align: 'left' as Alignment,
  weight: 'normal' as Weight,
  uppercase: false,
}

const Typography = styled.p<Partial<TypographyProps>>`
  padding: 0;
  margin: 0;

  color: ${({ theme, color = defaultProps.color }) => theme.colors[color]};

  font-family: Styrene B LC, serif;
  font-feature-settings: 'salt' on;

  font-size: ${({ theme, size = defaultProps.size }) => theme.fontSizes[size]};
  font-weight: ${({ theme, weight = defaultProps.weight }) =>
    theme.fontWeights[weight]};

  letter-spacing: ${({ letterSpacing }) =>
    typeof letterSpacing === 'number' ? `${letterSpacing}px` : letterSpacing};

  text-align: ${({ align }) => align};
  text-transform: ${({ uppercase = defaultProps.uppercase }) =>
    uppercase ? 'uppercase' : 'none'};
`

Typography.defaultProps = defaultProps

export type { TypographyProps }
export default Typography
