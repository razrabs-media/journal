import styled from '@emotion/styled'

import { VideoBadge } from '../../../common/components'
import { PostType } from '../../../types'

export const StyledPreview = styled.div<{ type: PostType; error: boolean }>`
  position: relative;

  display: flex;

  align-items: ${({ type, error }) =>
    type !== PostType.Tweet || error ? 'center' : 'flex-start'};
  justify-content: ${({ type, error }) =>
    type !== PostType.Tweet || error ? 'center' : 'flex-start'};

  flex-shrink: 0;

  width: 238px;
`

// TODO: отказаться от компонента Border.
// Перенести логику работы рамки внтурь StyledPreview
export const Border = styled.div`
  position: absolute;
  z-index: -1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  max-height: 140px;

  // внутрення граница
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.components.FallbackX.color};
`

export const StyledVideoBadge = styled(VideoBadge)`
  position: absolute;

  left: 4px;
  bottom: 4px;
`
