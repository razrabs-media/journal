import styled from '@emotion/styled'

export const GridArea = styled.div<{ area: string }>`
  display: grid;
  grid-area: ${({ area }) => area};
`
