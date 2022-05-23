import styled from '@emotion/styled'
import {
  Image,
  ImageWrapper as SharedImageWrapper,
  Typography,
} from 'shared/ui'

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
  min-height: 80px;
  min-width: 80px;

  max-height: 610px;

  ${SharedImageWrapper} {
    height: initial;
    max-height: 610px;
  }

  @media screen and (max-width: 999px) {
    max-height: initial;

    // У ImageWrapper (который shared/ui), а не этот max-height=500px, что мешает на мобильном отображении
    // :ya-hz: куда ещё вставить его стилизацию, поэтому пусть будет тут
    ${SharedImageWrapper} {
      height: 100%;
    }
  }

  @media screen and (max-width: 672px) {
    min-height: initial;
    ${SharedImageWrapper} {
      height: auto;
    }
  }
`

export const PostImage = styled(Image)`
  height: auto;
  width: 100%;
  max-height: 610px;
  object-fit: cover;

  @media screen and (max-width: 999px) {
    height: 100%;
    width: auto;
  }

  @media screen and (max-width: 672px) {
    height: auto;
    width: 100%;
  }
`

// TODO: это заголовок + описание. над неймингом еще надо подумать
export const PostTextWrapper = styled.div`
  p {
    max-width: 1027px;
  }
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.primary};
`

export const Title = styled(Typography)`
  font-size: 32px;
  letter-spacing: inherit;

  @media screen and (max-width: 671px) {
    font-size: 24px;
  }
`

export const Description = styled(Typography)`
  margin-top: 16px;
  letter-spacing: inherit;

  @media screen and (max-width: 671px) {
    font-size: 24px;
  }
`

export const SecondRow = styled.div`
  display: grid;
  margin-top: 14px;
  height: 22px;
  align-items: center;

  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  grid-template-areas: '. tags-and-share';
  grid-gap: 24px;

  @media screen and (max-width: 999px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: 'tags-and-share';
    height: auto;
  }
`

export const TagsAndShare = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  grid-area: tags-and-share;

  @media screen and (max-width: 672px) {
    flex-direction: column;
  }
`

export const TagsBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`

export const ShareBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 15px;

  @media screen and (max-width: 672px) {
    width: 100%;
    justify-content: space-evenly;
    height: 52px;
    margin-top: 20px;
    background-color: ${({ theme }) => theme.colors.tag};

    button {
      flex-grow: 1;
      height: 100%;
    }
  }
`
