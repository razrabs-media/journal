import styled from '@emotion/styled'
import { MarkdownRenderer } from 'shared/ui'
import { MediaScreen } from 'shared/ui/theme/responsive'

export const StyledReader = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
  max-width: 1024px;

  ${MediaScreen.tabletAndAbove} {
    margin-top: 40px;
  }
`

export const ContentWrapper = styled.main``

export const StyledRenderer = styled(MarkdownRenderer)`
  /* See https://github.com/emotion-js/emotion/issues/1178 */

  & > :first-child:not(style),
  & > style:first-child + * {
    margin-top: 0;
  }

  & :last-child {
    margin-bottom: 0;
  }
`
