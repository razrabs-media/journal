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

export const Typography = styled.p<Props>`
  padding: 0;
  margin: 0;
  color: ${({ theme, colorVariant = 'primary' }) =>
    theme.colors.text[colorVariant]};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  text-align: ${({ align = 'left' }) => align};
  font-size: ${({ size = 'small' }) => `${sizes[size]}px`};
  line-height: ${({ size }) => (size === 'small' ? '100%' : '120%')};
  font-family: Styrene B LC, serif;
  font-weight: ${({ weight = 'normal' }) => weight};
  font-feature-settings: 'salt' on;
  opacity: ${({ transparent }) => (transparent ? 0.6 : 1)};

  @media screen and (max-width: 671px) {
    font-size: ${({ size = 'small' }) => `${mobileSizes[size]}px`};
  }
`
