import { ComponentProps } from 'react'

export enum ShareType {
  Url = 'url',
  Twitter = 'twitter',
}

export type Props = {
  shareType: ShareType
} & ComponentProps<'button'>
