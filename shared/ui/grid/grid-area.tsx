import styled from '@emotion/styled'

export const GridAria = styled.div<{ area: string }>`
  display: grid;
  grid-area: ${({ area }) => area};
`
