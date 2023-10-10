import { useTheme } from '@emotion/react'
import { FC } from 'react'
import { GridArea, Image } from 'shared/ui'

import {
  AvatarArea,
  CancelReplyButton,
  ReplyContent,
  StyledReplyPreview,
} from './styled'

const CloseIcon = () => {
  const theme = useTheme()

  return (
    <svg
      fill='none'
      height='16'
      viewBox='0 0 16 16'
      width='16'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='8' cy='8' r='7.5' stroke={theme.colors.primary} />
      <path d='M5 5L11 11' stroke={theme.colors.primary} />
      <path d='M5 11L11 5' stroke={theme.colors.primary} />
    </svg>
  )
}

const ReplyArrow = () => (
  <svg
    fill='none'
    height='16'
    viewBox='0 0 16 16'
    width='16'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10.833 11.8327L13.1663 9.49935L10.833 7.16602'
      stroke='#93949A'
      strokeLinecap='square'
    />
    <path d='M4.5 2V9.5H13' stroke='#93949A' />
  </svg>
)

type Props = {
  avatarUrl: string
  content: string
  onReplyCancel: () => void
}
export const ReplyPreview: FC<Props> = ({
  avatarUrl,
  content,
  onReplyCancel,
}) => (
  <StyledReplyPreview>
    <AvatarArea area='avatar'>
      <ReplyArrow />
      <Image
        alt={"Reply user's avatar"}
        h={20}
        loadingSize='micro'
        src={avatarUrl}
        w={20}
      />
    </AvatarArea>

    <GridArea area='comment'>
      <ReplyContent as='span' color='secondary' size='md'>
        {content}
      </ReplyContent>
    </GridArea>

    <GridArea area='action'>
      <CancelReplyButton onClick={onReplyCancel}>
        <CloseIcon />
      </CancelReplyButton>
    </GridArea>
  </StyledReplyPreview>
)
