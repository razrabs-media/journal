import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import type { FC } from 'react'
import { Typography } from 'shared/ui'

const StyledTypography = styled(Typography)`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > * {
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }
  }
`

const LongReadIcon = () => {
  const {
    colors: { secondary },
  } = useTheme()

  return (
    <svg
      fill='none'
      height='9'
      viewBox='0 0 11 9'
      width='11'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.5 0.257812L10.2631 8.50781H0.73686L5.5 0.257812Z'
        fill={secondary}
      />
    </svg>
  )
}

type LongReadProps = {
  className?: string
}
export const LongRead: FC<LongReadProps> = (props) => (
  <StyledTypography as='span' color='secondary' size='sm' {...props}>
    LONG <LongReadIcon />
  </StyledTypography>
)
