import styled from '@emotion/styled'

export const MainGrid = styled.div`
  display: grid;
  row-gap: 24px;
  column-gap: 24px;
  grid-template:
    '. header .' 54px
    '. content .' 1fr
    '. footer .' auto /
    minmax(0px, auto) minmax(auto, 1872px) minmax(0px, auto);

  @media screen and (max-width: 671px) {
    row-gap: 10px;
    column-gap: 10px;

    grid-template:
      '. header .' 54px
      '. content .' 1fr
      '. footer .' auto /
      minmax(10px, auto) minmax(auto, 1872px) minmax(10px, auto);
  }
`

export const DrawerGrid = styled.div`
  display: grid;
  grid-template:
    'main drawer' /
    1fr auto;
`
