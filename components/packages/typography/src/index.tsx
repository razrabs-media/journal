import styled from '@emotion/styled'

import type { TypographyProps } from './types'

const defaultProps: Omit<TypographyProps, 'letterSpacing' | 'lineHeight'> = {
  size: 'lg',
  color: 'primary',
  align: 'left',
  weight: 'normal',
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

  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '120%')};

  text-align: ${({ align }) => align};
  text-transform: ${({ uppercase = defaultProps.uppercase }) =>
    uppercase ? 'uppercase' : 'none'};
`

Typography.defaultProps = defaultProps

export type { TypographyProps }
export default Typography
