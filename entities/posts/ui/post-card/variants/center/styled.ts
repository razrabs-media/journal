import styled from '@emotion/styled'

export const Card = styled.div`
  padding: 32px;
  display: grid;
  grid-template:
    '.' 1fr
    'title' auto
    'date' 1fr /
    1fr;
  justify-items: center;
  gap: 16px;
  border: 1px solid #ffffff;
  aspect-ratio: 4 / 1;
`
