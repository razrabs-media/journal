import styled from '@emotion/styled'
import { Props, Size } from './types'

const sizes: Record<Size, number> = {
  small: 12,
  medium: 24,
  large: 40,
}

// letter-spacing: ${({ letterSpacing }) =>
//   letterSpacing === 'wide' ? '3px' : '1px'};
export const Typography = styled.p<Props>`
  padding: 0;
  margin: 0;
  color: ${({ theme, colorVariant = 'primary' }) =>
    theme.colors.text[colorVariant]};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  font-size: ${({ size = 'small' }) => `${sizes[size]}px`};
  line-height: ${({ size }) => (size === 'small' ? '100%' : '120%')};
  font-family: Styrene B LC, serif;
  font-weight: ${({ weight = 'normal' }) => weight};
  font-feature-settings: 'salt' on;
  opacity: ${({ transparent }) => (transparent ? 0.6 : 1)};
`
