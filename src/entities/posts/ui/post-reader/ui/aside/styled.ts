import styled from '@emotion/styled'
import { Media } from '@razrabs-ui/responsive'
import Typography from '@razrabs-ui/typography'

export const StyledHeader = styled.aside<{ isShowDataAside: boolean }>`
  position: sticky;
  top: 32px;
  transition: opacity 0.5s;
  opacity: ${({ isShowDataAside }) => (isShowDataAside ? '0.3' : '1')};

  &:hover {
    opacity: 1;
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

  ${Media.largeDesktopAndBelow} {
    display: ${({ open }) => (open ? 'none' : 'flex')};
  }
`

export const Title = styled(Typography)`
  font-size: 24px;
  letter-spacing: inherit;
  padding-bottom: 12px;

  ${Media.mobile} {
    font-size: 24px;
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

export const ShareBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > button,
  a {
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }

  ${Media.mobile} {
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

export const TagsAndDateBlock = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TagsBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  margin-top: 14px;
  padding-top: 14px;

  & > * {
    margin-right: 4px;

    &:last-child {
      margin-right: 0;
    }
  }
`

export const DefaultShareButton = styled(Typography)`
  cursor: pointer;
  background: none;
  border: none;
`
