import styled from '@emotion/styled'
import { MarkdownRenderer } from 'shared/ui'
import { MediaScreen } from 'shared/ui/theme/responsive'

export const StyledReader = styled.div<{ open: boolean }>`
  display: grid;

  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  grid-gap: 24px;

  ${MediaScreen.largeDesktopAndBelow} {
    grid-template-areas: '${({ open }) => (open ? 'content' : '. content')}';
  }

  ${MediaScreen.tabletAndAbove} {
    margin-top: 40px;
  }

  ${MediaScreen.tabletAndBelow} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'content';
  }
`

export const ContentWrapper = styled.main`
  margin-top: 76px;
`

export const StyledRenderer = styled(MarkdownRenderer)`
  grid-area: content;
  /* See https://github.com/emotion-js/emotion/issues/1178 */
  & > :first-of-type:not(style):not(:first-of-type ~ *),
  & > style + * {
    margin-top: 0;
  }

  & :last-child {
    margin-bottom: 0;
  }
`

export const SecondRow = styled.div``

export const SecondWrapper = styled.div`
  grid-area: aside;
`
