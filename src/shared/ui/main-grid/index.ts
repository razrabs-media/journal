import styled from '@emotion/styled'

export const MainGrid = styled.div`
  display: grid;
  row-gap: 24px;
  grid-template:
    '. header .' 54px
    '. content .' 1fr
    '. footer .' auto /
    minmax(24px, auto) minmax(auto, 1872px) minmax(24px, auto);

  @media screen and (max-width: 671px) {
    grid-template:
      '. header .' 54px
      '. content .' 1fr
      '. footer .' auto /
      minmax(10px, auto) minmax(auto, 1872px) minmax(10px, auto);
  }
`
