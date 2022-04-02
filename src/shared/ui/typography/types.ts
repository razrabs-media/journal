export type Size = 'large' | 'medium' | 'small'

export type Props = {
  uppercase?: boolean
  transparent?: boolean
  size?: Size
  align?: 'left' | 'center' | 'right'
  color?: 'primary' | 'secondary' | 'contrast'
  weight?: 'normal' | '500' | 'bold'
  letterSpacing?: 'normal' | 'wide'
}
