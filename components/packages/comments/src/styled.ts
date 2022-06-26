import styled from '@emotion/styled'
import Typography from '@razrabs-ui/typography'

export const StyledComment = styled.div`
  display: flex;
  flex-direction: row;

  gap: 10px;

  padding: 20px 24px;

  &:hover {
    background: #38393d;
  }
`

export const RowsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex-grow: 1;
`

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 6px;
`

export const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-bottom: 4px;

  & svg {
    flex-shrink: 0;
  }
`

export const ReplyContent = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
