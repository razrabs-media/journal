import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Content = styled.main<{ withAside?: boolean }>`
  // Если передан aside, то отображаем грид и ставим слева aside
  ${({ withAside }) =>
    withAside &&
    css`
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
      grid-gap: 24px;
    `};
`
