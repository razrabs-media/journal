import styled from '@emotion/styled'
import { Typography } from 'shared/ui'
import { GridArea, IconButton } from 'shared/ui'

export const StyledReplyPreview = styled.div`
  display: grid;
  grid-template-areas: 'avatar comment action';
  grid-template-columns: auto 1fr auto;

  align-items: center;
  gap: 10px;

  background: ${({ theme }) => theme.colors.contrastBackgroundSecondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundSecondary};

  padding: 10px 24px;
`

export const AvatarArea = styled(GridArea)`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > * {
    margin-right: 4px;

    &:last-child {
      margin-right: 0;
    }
  }
`

export const ReplyContent = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`

export const CancelReplyButton = styled(IconButton)``
