import styled from '@emotion/styled'
import { MediaScreen } from 'shared/ui/theme/responsive'

export const FrontPageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  gap: 32px 24px;
  margin: 0 auto;
  max-width: 1920px;

  // Если экран планшета - расставить контент точно не выйдет, так как колонок теперь 2
  // Отдаем это дело в руки grid-auto-flow, с доверием к тому, что контент уже отсортирован
  ${MediaScreen.desktopAndBelow} {
    grid-auto-flow: row dense;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }

  // Если экран мобильного, просто фигачим строчками
  ${MediaScreen.mobile} {
    grid-auto-flow: row dense;
    grid-template-columns: 1fr;
    gap: 20px;
  }
`
