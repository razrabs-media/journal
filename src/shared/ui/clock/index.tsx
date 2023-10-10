import styled from '@emotion/styled'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import type { FC } from 'react'
import { forwardRef } from 'react'
import { Typography } from 'shared/ui/typography'

type ClockProps = {
  currentTime: string
}

const StyledTypography = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: fit-content;
  column-gap: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.secondary};

  &:before {
    content: '';
    z-index: 1;
    height: 11px;
    width: 11px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.brand};
  }
`

const Clock: FC<ClockProps> = forwardRef<any, ClockProps>(
  ({ currentTime }, ref) => (
    <StyledTypography as='time' ref={ref}>
      {format(new Date(currentTime), 'd MMMM, H:mm', {
        locale: ru,
      })}
    </StyledTypography>
  ),
)

Clock.displayName = 'Clock'

export default Clock
