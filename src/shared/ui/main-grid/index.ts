import styled from '@emotion/styled'

export const MainGrid = styled.div`
  display: grid;
  row-gap: 24px;
  grid-template:
    '. header . scroll' 54px
    '. content . scroll' 1fr
    '. footer . scroll' auto /
    minmax(24px, auto) minmax(auto, 1872px) minmax(20px, auto) 4px;

  @media screen and (max-width: 671px) {
    row-gap: 10px;

    grid-template:
      '. header . scroll' 54px
      '. content . scroll' 1fr
      '. footer . scroll' auto /
      minmax(10px, auto) minmax(auto, 1872px) minmax(6px, auto) 4px;
  }
`
