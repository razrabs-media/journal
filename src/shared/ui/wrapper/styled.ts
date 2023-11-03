import styled from '@emotion/styled'
import { MediaScreen } from '../theme/responsive'

export const Wrapper = styled.div`
  padding: 0 24px;
  box-sizing: border-box;

  ${MediaScreen.tabletAndBelow} {
    padding: 0 10px;
  }
`
