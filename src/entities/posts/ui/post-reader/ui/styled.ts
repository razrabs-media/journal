import styled from '@emotion/styled'
import {MarkdownRenderer} from 'shared/ui'

export const StyledReader = styled.div``

export const ContentWrapper = styled.main`
  display: grid;

  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  grid-template-areas: '. content';
  grid-gap: 24px;

  @media screen and (min-width: 1000px) {
    margin-top: 64px;
  }

  @media screen and (max-width: 999px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto auto;
    grid-template-areas:
      '.'
      'content';
  }
`

export const StyledRenderer = styled(MarkdownRenderer)`
  grid-area: content;
`
