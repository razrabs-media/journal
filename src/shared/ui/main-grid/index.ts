import styled from '@emotion/styled'

export const MainGrid = styled.div`
  grid-area: main;
  display: grid;
  gap: 24px;
  height: 100vh;
  min-width: 300px;
  overflow-x: hidden;

  grid-template:
    '.' 54px
    '.' 1fr /
    1fr;

  @media screen and (max-width: 671px) {
    gap: 10px;
  }
`

export const FloatGrid = styled.div`
  display: grid;
  column-gap: 24px;

  grid-template:
    '. content .' auto /
    minmax(0, auto) minmax(auto, 1872px) minmax(0, auto);

  @media screen and (max-width: 671px) {
    column-gap: 10px;

    grid-template:
      '. content .' auto /
      minmax(0, auto) minmax(auto, 1872px) minmax(0, auto);
  }
`

export const ScrollFloatGrid = styled.div`
  display: grid;
  column-gap: 20px;
  overflow-y: auto;

  grid-template:
    '. content .' auto /
    minmax(4px, auto) minmax(auto, 1872px) minmax(0, auto);

  @media screen and (max-width: 671px) {
    column-gap: 6px;

    grid-template:
      '. content .' auto /
      minmax(4px, auto) minmax(auto, 1872px) minmax(0, auto);
  }
`
