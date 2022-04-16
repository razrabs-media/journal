import styled from '@emotion/styled'
import { Image } from 'shared/ui'
import { PostCardVariant } from '../../types'

export const Card = styled.div`
  display: grid;
  grid-template:
    'preview' auto
    'title' auto
    'date' auto /
    1fr;
  gap: 8px;
`

export const Preview = styled(Image)<{ variant?: PostCardVariant }>`
  width: ${({ variant }) =>
    variant === PostCardVariant.Line ? '100%' : 'auto'};

  height: ${({ variant }) =>
    variant === PostCardVariant.Line ? 'auto' : '100%'};
`
