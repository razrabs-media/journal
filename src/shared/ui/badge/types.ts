import type { ElementType, ReactNode } from 'react'
import { CSSProperties } from 'react'

export type StyleBadgeProps = {
  wide?: boolean
  letterSpacing?: CSSProperties['letterSpacing']
  color?: 'primary' | 'secondary' | 'brand'
  margin?: CSSProperties['margin']
  variant?: 'filled' | 'outline'
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xl'
}

export type BadgeProps = {
  as?: ElementType
  className?: string
  children?: ReactNode
  itemProp?: string
} & StyleBadgeProps
