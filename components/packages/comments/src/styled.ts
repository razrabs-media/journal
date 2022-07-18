import styled from '@emotion/styled'
import Typography from '@razrabs-ui/typography'

export const StyledComment = styled.div`
  display: flex;
  flex-direction: row;

  cursor: pointer;

  gap: 10px;
  height: fit-content;

  padding: 20px 24px;

  // TODO: вынести в @razrabs-ui/theme
  &:hover {
    background: #38393d;
  }
`

export const RowsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex-grow: 1;
  overflow-wrap: break-word;
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
  gap: 4px;
  margin-bottom: 4px;

  cursor: pointer;

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
