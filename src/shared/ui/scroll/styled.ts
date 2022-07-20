//noinspection CssInvalidPropertyValue

import styled from '@emotion/styled'

export const ScrollWrapper = styled.div`
  grid-area: scroll;
  position: sticky;
  top: 0;
  /* mobile fix */
  height: -moz-available;
  height: -webkit-fill-available;
  height: fill-available;
  /* ---------- */
  height: 100vh;
  overflow-y: auto;
`

export const ScrollBody = styled.div`
  width: 4px;
`
