import styled from '@emotion/styled'
import { Media } from '@razrabs-ui/responsive'
import { MarkdownRenderer } from 'shared/ui'

export const StyledReader = styled.div<{ open: boolean }>`
  display: grid;

  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  grid-gap: 24px;

  a {
    display: inline-block;
    max-width: 100%;
    word-wrap: break-word;
  }

  ${Media.largeDesktopAndBelow} {
    grid-template-areas: '${({ open }) => (open ? 'content' : '. content')}';
  }

  ${Media.tabletAndAbove} {
    margin-top: 40px;
  }

  ${Media.tabletAndBelow} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'content';

    a {
      max-width: 90vw;
    }
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
