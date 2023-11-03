import styled from '@emotion/styled'
import { Typography } from 'shared/ui'
import { MediaScreen } from 'shared/ui/theme/responsive'

export const StyledHeader = styled.header``

// TODO: это заголовок над неймингом еще надо подумать
export const PostTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  font-family: 'Inter', Arial, sans-serif;

  ${MediaScreen.tabletAndBelow} {
    margin-top: 32px;
  }
`
export const ImageWrapper = styled.div`
  margin-top: 40px;

  ${MediaScreen.tabletAndBelow} {
    margin-top: 32px;
  }
`
export const Title = styled(Typography)`
  font-size: 40px;
  letter-spacing: -1px;
  line-height: 100%;
  font-weight: 700;
  margin-top: 16px;

  ${MediaScreen.mobile} {
    font-size: 28px;
  }
`

export const TagsAndShare = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  grid-area: tags-and-share;
  align-items: baseline;
  margin-top: 16px;

  ${MediaScreen.tabletAndBelow} {
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
  justify-content: space-between;
  margin-top: 24px;

  & > button,
  a {
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }

  ${MediaScreen.tabletAndBelow} {
    width: 100%;
    justify-content: space-between;
    margin-top: 20px;
  }
`

export const InfoWrapper = styled.div`
  font-family: 'Inter', Arial, sans-serif;
  font-size: 12px;
  span {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`
