import styled from '@emotion/styled'

import type { TypographyProps } from './types'

const defaultProps: Omit<
  TypographyProps,
  'letterSpacing' | 'lineHeight' | 'href' | 'rel' | 'target'
> = {
  size: 'lg',
  color: 'primary',
  align: 'left',
  weight: 'normal',
  uppercase: false,
  disableHover: false,
}

const Typography = styled.p<Partial<TypographyProps>>`
  padding: 0;
  margin: 0;

  color: ${({ theme, color = defaultProps.color }) => theme.colors[color]};

  font-family: Styrene B LC, sans-serif;
  font-feature-settings: 'salt' on;

  font-size: ${({ theme, size = defaultProps.size }) => theme.fontSizes[size]};
  font-weight: ${({ theme, weight = defaultProps.weight }) =>
    theme.fontWeights[weight]};

  letter-spacing: ${({ letterSpacing }) =>
    typeof letterSpacing === 'number' ? `${letterSpacing}px` : letterSpacing};

  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}` : '120%')};

  text-align: ${({ align }) => align};
  text-transform: ${({ uppercase = defaultProps.uppercase }) =>
    uppercase ? 'uppercase' : 'none'};

  text-size-adjust: 100%;

  &:hover {
    ${({ disableHover, theme, color = defaultProps.color }) =>
      disableHover ? `color: ${theme.colors[color]};` : ''}
  }
`

Typography.defaultProps = defaultProps

export type { TypographyProps }
export default Typography
