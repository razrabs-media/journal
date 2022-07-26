import styled from '@emotion/styled'
import Typography from '@razrabs-ui/typography'

export const StyledHeader = styled.header`
  @media screen and (min-width: 1000px) {
    margin-top: 40px;
  }
`

// Первая строка - картинка, текст, описание
export const FirstRow = styled.div<{ open: boolean }>`
  display: grid;

  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  grid-gap: 24px;

  @media screen and (max-width: 1920px) {
    grid-template-columns: ${({ open }) =>
      open ? '1fr' : 'minmax(0, 1fr) minmax(0, 2fr)'};
  }

  @media screen and (max-width: 999px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto auto;
    grid-gap: calc(16px);
  }
`

export const ImageWrapper = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 1920px) {
    display: ${({ open }) => (open ? 'none' : 'flex')};
  }
`

// TODO: это заголовок + описание. над неймингом еще надо подумать
export const PostTextWrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
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

export const SecondRow = styled.div<{ open: boolean }>`
  display: grid;
  margin-top: 14px;
  height: 22px;
  align-items: center;

  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  grid-template-areas: '. tags-and-share';
  grid-gap: 24px;

  @media screen and (max-width: 1920px) {
    grid-template-columns: ${({ open }) =>
      open ? '1fr' : 'minmax(0, 1fr) minmax(0, 2fr)'};
    grid-template-areas: '${({ open }) =>
      open ? 'tags-and-share' : '. tags-and-share'}';
  }

  @media screen and (max-width: 999px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: 'tags-and-share';
    height: auto;
  }
`

export const ImageDescription = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
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
  flex-wrap: wrap;

  & > * {
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
