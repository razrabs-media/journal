import styled from '@emotion/styled'
import { FC, useMemo } from 'react'
import { parseDate } from 'shared/lib/parse-date'
import { Props } from './types'

const StyledTypography = styled.time`
  font-family: 'Inter', Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
`

export const DateAgo: FC<Props> = ({
  date,
  distance,
  format,
  className,
  ...restProps
}) => {
  const parsedDate = useMemo(
    () => parseDate(date, { distance, format }),
    [date, distance, format],
  )

  return (
    <StyledTypography
      as='time'
      className={className}
      {...restProps}
      dateTime={date}
    >
      {parsedDate}
    </StyledTypography>
  )
}

DateAgo.defaultProps = {
  uppercase: true,
  color: 'secondary',
  itemProp: 'datePublished',
}
