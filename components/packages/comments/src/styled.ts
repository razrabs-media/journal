import styled from '@emotion/styled'
import { Media } from '@razrabs-ui/responsive'
import Typography from '@razrabs-ui/typography'
import { StyledCommentProps } from './types'

export const StyledComment = styled.div<StyledCommentProps>`
  display: flex;
  flex-direction: row;

  cursor: pointer;

  height: fit-content;

  padding: 15px 10px;

  transition: background-color 150ms ease-in-out;

  // TODO: вынести в @razrabs-ui/theme
  ${({ isHighlighted }) => isHighlighted && 'background-color: #38393d;'}

  ${Media.tabletAndAbove} {
    padding: 20px 24px;
  }

  & > * {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  // TODO: вынести в @razrabs-ui/theme
  &:hover {
    background: #38393d;
  }
  & a {
    color: ${({ theme }) => theme.colors.brand};

    &:hover {
      text-decoration: underline;
    }
  }
`

export const RowsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex-grow: 1;
  word-break: break-word;
  white-space: pre-wrap;
`

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 6px;
`

export const ReplyRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;

  cursor: pointer;

  & > * {
    margin-right: 4px;

    &:last-child {
      margin-right: 0;
    }
  }

  & svg {
    flex-shrink: 0;
  }

  &:hover * {
    stroke: ${({ theme }) => theme.colors.brand};
    color: ${({ theme }) => theme.colors.brand};
  }
`

export const ReplyContent = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
