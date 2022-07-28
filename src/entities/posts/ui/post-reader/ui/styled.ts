import styled from '@emotion/styled'
import { MarkdownRenderer } from 'shared/ui'

export const StyledReader = styled.div``

export const ContentWrapper = styled.main<{ open: boolean }>`
  margin-top: 76px;
  display: grid;

  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  grid-template-areas: '. content';
  grid-gap: 24px;

  @media screen and (max-width: 1920px) {
    grid-template-columns: ${({ open }) =>
      open ? '1fr' : 'minmax(0, 1fr) minmax(0, 2fr)'};
    grid-template-areas: '${({ open }) => (open ? 'content' : '. content')}';
  }

  @media screen and (min-width: 672px) {
    margin-top: 74px;
  }

  @media screen and (max-width: 999px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'content';
  }
`

export const StyledRenderer = styled(MarkdownRenderer)`
  grid-area: content;
  & :first-child {
    margin-top: 0;
  }

  & :last-child {
    margin-bottom: 0;
  }
`
