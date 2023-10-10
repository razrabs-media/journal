import styled from '@emotion/styled'
import { Typography } from 'shared/ui'
import { MediaScreen } from 'shared/ui/theme/responsive'

export const StyledHeader = styled.header``

// TODO: это заголовок + описание. над неймингом еще надо подумать
export const PostTextWrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`

export const Title = styled(Typography)`
  font-size: 32px;
  letter-spacing: inherit;

  ${MediaScreen.mobile} {
    font-size: 24px;
  }
`

export const Description = styled(Typography)`
  margin-top: 16px;
  letter-spacing: inherit;

  ${MediaScreen.mobile} {
    font-size: 24px;
  }
`

export const TagsAndShare = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  grid-area: tags-and-share;
  align-items: baseline;
  margin-top: 14px;

  ${MediaScreen.mobile} {
    flex-direction: column;
  }
`

export const TagsBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  & > * {
    &:last-child {
      margin-right: 0;
    }
  }
`

export const ShareBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;

  & > button,
  a {
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }

  ${MediaScreen.mobile} {
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
