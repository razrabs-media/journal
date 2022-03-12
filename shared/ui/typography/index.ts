import styled from '@emotion/styled'
import { Props } from './types'

export const Typography = styled.p<Props>`
  padding: 0;
  margin: 0;
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing === 'wide' ? '3px' : '1px'};
  color: ${({ theme, colorVariant = 'primary', color = 'main' }) =>
    theme.colors[colorVariant][color]};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  font-size: ${({ size }) => (size === 'large' ? '24px' : '12px')};
  line-height: ${({ size }) => (size === 'large' ? '120%' : '100%')};
  font-family: Styrene B LC, serif;
  font-weight: ${({ weight = 'normal' }) => weight};
  font-feature-settings: 'salt' on;
`
