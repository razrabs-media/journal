import { FC, useMemo } from 'react'
import { parseDate } from 'shared/lib/parse-date'
import { Typography } from 'shared/ui'
import { Props } from './types'

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
    <Typography as='time' className={className} {...restProps} dateTime={date}>
      {parsedDate}
    </Typography>
  )
}

DateAgo.defaultProps = {
  uppercase: true,
  color: 'secondary',
  itemProp: 'datePublished',
}
