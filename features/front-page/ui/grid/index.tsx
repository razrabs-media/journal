import styled from '@emotion/styled'

export const FrontPageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  gap: 32px 24px;

  // Если экран планшета - расставить контент точно не выйдет, так как колонок теперь 2
  // Отдаем это дело в руки grid-auto-flow, с доверием к тому, что контент уже отсортирован
  @media screen and (max-width: 1320px) {
    grid-auto-flow: row dense;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }

  // Если экран мобильного, просто фигачим строчками
  @media screen and (max-width: 671px) {
    grid-auto-flow: row dense;
    grid-template-columns: 1fr;
  }
`
