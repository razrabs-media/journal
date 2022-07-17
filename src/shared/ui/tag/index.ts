import styled from '@emotion/styled'
import type { Props } from './types'

export const Tag = styled.span<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Styrene B LC, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  padding: 6px 8px;
  height: 24px;
  border: 0;
  outline: none;
  cursor: ${({ onClick, disabled }) => {
    if (onClick && !disabled) return 'pointer'
    return 'default'
  }};
  background: ${({ theme, color, disabled }) => {
    if (disabled) return theme.colors.primary
    if (color === 'primary') return theme.colors.brand
    if (color === 'secondary') return '#38393D'
    return theme.colors.brand
  }};
  font-weight: 400;
  color: ${({ theme, color, disabled }) => {
    if (disabled) return theme.colors.secondary
    if (color === 'primary') return theme.colors.contrastPrimary
    if (color === 'secondary') return theme.colors.secondary
    return theme.colors.contrastPrimary
  }};
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:active {
    background: ${({ theme, color, onClick, disabled }) => {
      if (onClick && color === 'primary' && !disabled) return '#B481D4'
      if (onClick && color === 'secondary' && !disabled) return '#38393D'
      return theme.colors.primary
    }};
  }
`
Tag.defaultProps = {
  color: 'primary',
}
