import type { Theme } from '@emotion/react'
import type { CSSProperties } from 'react'

export type Size = keyof Theme['fontSizes']
export type Weight = keyof Theme['fontWeights']
export type Color = keyof Theme['colors']

export type Alignment = CSSProperties['textAlign']

export type TypographyProps = {
  size: Size
  color: Color
  align: Alignment
  weight: Weight
  letterSpacing: CSSProperties['letterSpacing']
  lineHeight: CSSProperties['lineHeight']
  uppercase: boolean
  disableHover: boolean
  href: string
  rel: HTMLAnchorElement['rel']
  target: HTMLAnchorElement['target']
}
