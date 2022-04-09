import styled from '@emotion/styled'
import {
  Image,
  ImageWrapper as SharedImageWrapper,
  Typography,
} from 'shared/ui'

export const Layout = styled.div`
  position: fixed;

  display: grid;

  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  grid-template-rows: auto;
  grid-gap: 24px;

  // Учитываем гэпы корневого лэйаута
  width: calc(100% - 48px);
  max-width: 1872px;

  @media screen and (max-width: 999px) {
    //TODO Мобильное отображение
    display: none;
  }

  @media screen and (max-width: 671px) {
    // Учитываем гэпы корневого лэйаута
    width: calc(100% - 20px);
  }
`

export const StyledFloatedBlock = styled.div<{ shouldDisplay: boolean }>`
  display: ${({ shouldDisplay }) => (shouldDisplay ? 'flex' : 'none')};
  flex-direction: column;

  max-width: 450px;

  opacity: 0.3;

  transition: opacity 75ms ease-in-out;

  &:hover {
    opacity: 1;
  }

  ${SharedImageWrapper} {
    height: initial;
    max-height: initial;
  }

  @media screen and (max-width: 1319px) {
    max-width: initial;
  }
`

export const Preview = styled(Image)`
  width: 100%;
  height: auto;
  max-height: initial;
`

export const Title = styled(Typography)`
  margin-top: 10px;
`

export const DateAndShareRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`

export const PublicationDate = styled(Typography)``

export const ShareBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 15px;
`

export const Line = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.logo};
`

export const TagsBlock = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
`
