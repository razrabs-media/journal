import styled from '@emotion/styled'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, max-content);
  gap: 32px 24px;
`

export const GridAria = styled.div<{ area: string }>`
  display: grid;
  grid-area: ${({ area }) => area};
`
