import styled from '@emotion/styled'
import { MarkdownRenderer } from 'shared/ui'
import { MediaScreen } from 'shared/ui/theme/responsive'

export const StyledReader = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 720px;
`

export const ContentWrapper = styled.main`
  margin-top: 80px;

  ${MediaScreen.tabletAndBelow} {
    margin-top: 48px;
  }
`

export const StyledRenderer = styled(MarkdownRenderer)``
