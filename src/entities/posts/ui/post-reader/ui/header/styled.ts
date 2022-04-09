import styled from '@emotion/styled'
import { Image, Typography } from 'shared/ui'

export const StyledHeader = styled.header``

// Первая строка - картинка, текст, описание
export const FirstRow = styled.div`
  display: grid;

  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  grid-gap: 24px;

  @media screen and (max-width: 999px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto auto;
    grid-gap: calc(
      16px + 32px
    ); // 16px - отступ по макету + 32px отступ для даты под картинкой
  }
`

export const ImageWrapper = styled.div`
  position: relative;

  min-height: 80px;
  min-width: 80px;

  max-height: 610px;

  object-fit: contain;
`

export const PostImage = styled(Image)``

export const PublicationDate = styled(Typography)`
  position: absolute;
  left: 0;
  bottom: -32px;
`

// TODO: это заголовок + описание. над неймингом еще надо подумать
export const PostTextWrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.primary};
`

export const Title = styled.h1`
  font-size: 32px;
  text-transform: uppercase;
  margin: 0;
  font-weight: normal;
`

export const Description = styled(Typography)`
  margin-top: 16px;
`

export const SecondRow = styled.div`
  display: grid;
  margin-top: 14px;
  height: 22px;
  align-items: center;

  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  grid-gap: 24px;

  @media screen and (max-width: 999px) {
    grid-template-columns: minmax(0, 1fr);

    // Первый див в этой строке - отступ слева для картинки. В мобилке его убираем
    & > div:first-child {
      display: none;
    }
  }
`

export const TagsAndShare = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const TagsBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > div {
    margin-right: 4px;

    &:last-child {
      margin-right: 0;
    }
  }
`

export const ShareBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > button {
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }
`
