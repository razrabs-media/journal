import type { ComponentProps } from 'react'

import { StyledImageProps } from 'shared/ui/image'
import type { PostType } from '../../types'

export type PreviewProps = {
  type: PostType
  preview?: string
} & Omit<ComponentProps<'img'>, 'src'> &
  Pick<StyledImageProps, 'priority' | 'loadingSize'>
