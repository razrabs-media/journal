import { ReactNode } from 'react'

export type Position = {
  x: number
  y: number
  w: number
  h: number
}

export type Props = Position & { component: ReactNode }
