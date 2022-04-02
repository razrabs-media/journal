import styled from '@emotion/styled'
import { Props, Size } from './types'

const sizes: Record<Size, number> = {
  small: 12,
  medium: 24,
  large: 40,
}

const mobileSizes: Record<Size, number> = {
  small: 10,
  medium: 16,
  large: 32,
}

// Webstorm не понимает, что там помимо строки может придти число
// noinspection SuspiciousTypeOfGuard
export const Typography = styled.p<Props>`
  padding: 0;
  margin: 0;
  color: ${({ theme, color = 'primary' }) =>
    color === 'contrast' ? theme.colors.logo : theme.colors.text[color]};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  text-align: ${({ align = 'left' }) => align};
  font-size: ${({ size = 'small' }) =>
    typeof size === 'string' ? `${sizes[size]}px` : `${size}px`};
  line-height: ${({ size }) => (size === 'small' ? '100%' : '120%')};
  letter-spacing: ${({ size }) => `${size === 'medium' ? 3 : 1}px`};
  font-family: Styrene B LC, serif;
  font-weight: ${({ weight = 'normal' }) => weight};
  font-feature-settings: 'salt' on;
  opacity: ${({ transparent }) => (transparent ? 0.6 : 1)};
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  @media screen and (max-width: 671px) {
    font-size: ${({ size = 'small' }) =>
      typeof size === 'string' ? `${mobileSizes[size]}px` : `${size}px`};
  }
`
