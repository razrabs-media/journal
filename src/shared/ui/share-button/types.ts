import type { ElementType } from 'react'
import { ComponentProps } from 'react'

export enum ShareType {
  Url = 'url',
  Twitter = 'twitter',
}

export type Props = {
  shareType: ShareType
  as?: ElementType<any>
  href?: string
} & ComponentProps<'button'>
