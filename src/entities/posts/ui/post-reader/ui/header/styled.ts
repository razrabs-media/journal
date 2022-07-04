import styled from '@emotion/styled'
import Typography from '@razrabs-ui/typography'

export const StyledHeader = styled.header`
  @media screen and (min-width: 1000px) {
    margin-top: 64px;
  }
`

// Первая строка - картинка, текст, описание
export const FirstRow = styled.div`
  display: grid;

  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  grid-gap: 24px;

  @media screen and (max-width: 999px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto auto;
    grid-gap: calc(16px);
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

// TODO: это заголовок + описание. над неймингом еще надо подумать
export const PostTextWrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`

export const Title = styled(Typography)`
  max-width: 1027px;
  font-size: 32px;
  letter-spacing: inherit;

  @media screen and (max-width: 671px) {
    font-size: 24px;
  }
`

export const Description = styled(Typography)`
  max-width: 1027px;
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

export const ImageDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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

    background-color: ${({ theme }) => theme.colors.contrastSecondary};

    button {
      flex-grow: 1;
      height: 100%;
    }
  }
`
