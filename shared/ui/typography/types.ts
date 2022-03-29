export type Size = 'large' | 'medium' | 'small'

export type Props = {
  uppercase?: boolean
  transparent?: boolean
  size?: Size
  colorVariant?: 'primary' | 'secondary'
  weight?: 'normal' | '500' | 'bold'
  letterSpacing?: 'normal' | 'wide'
}
