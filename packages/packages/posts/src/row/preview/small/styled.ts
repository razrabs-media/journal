import styled from '@emotion/styled'

import { VideoBadge } from '../../../common/components'

export const StyledPreview = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 105px;
  height: fit-content;
`

export const StyledVideoBadge = styled(VideoBadge)`
  position: absolute;

  left: 4px;
  bottom: 4px;
`
