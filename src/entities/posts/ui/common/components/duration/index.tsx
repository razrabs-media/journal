import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import type { FC } from 'react'
import { Typography } from 'shared/ui'

const StyledTypography = styled(Typography)`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > * {
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
`

const DurationIcon = () => {
  const {
    colors: { secondary },
  } = useTheme()

  return (
    <svg
      fill='none'
      height='9'
      viewBox='0 0 8 9'
      width='8'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='4' cy='4.49609' fill={secondary} r='4' />
    </svg>
  )
}

type DurationProps = {
  duration?: string
  className?: string
}
export const Duration: FC<DurationProps> = ({ duration, ...props }) => (
  <StyledTypography as='span' color='secondary' size='sm' {...props}>
    {duration} <DurationIcon />
  </StyledTypography>
)
