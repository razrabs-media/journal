import styled from '@emotion/styled'

export const MainGrid = styled.div`
  grid-area: main;
  display: grid;
  row-gap: 24px;

  grid-template:
    '. header .' 54px
    '. content .' 1fr
    '. footer .' auto /
    minmax(24px, auto) minmax(auto, 1872px) minmax(24px, auto);

  @media screen and (max-width: 671px) {
    row-gap: 10px;

    grid-template:
      '. header .' 54px
      '. content .' 1fr
      '. footer .' auto /
      minmax(10px, auto) minmax(auto, 1872px) minmax(10px, auto);
  }
`
