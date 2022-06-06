import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import Typography from '@razrabs-ui/typography'
import type { FC } from 'react'

const StyledTypography = styled(Typography)`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 8px;
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
