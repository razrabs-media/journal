import type { ComponentProps } from 'react'

import type { PostType } from '../../types'

export type PreviewProps = {
  type: PostType
  preview?: string
} & Omit<ComponentProps<'img'>, 'src'>
