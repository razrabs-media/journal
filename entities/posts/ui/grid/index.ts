import styled from '@emotion/styled'

export const CenterGrid = styled.div`
  overflow: hidden;
  position: relative;
  cursor: pointer;
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

export const ColumnGrid = styled.div`
  position: relative;
  cursor: pointer;
  display: grid;
  grid-template:
    'preview' auto
    'title' auto
    'date' auto /
    1fr;
  gap: 8px;
`
