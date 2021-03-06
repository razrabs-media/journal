import Typography from '@razrabs-ui/typography'
import { FC, useMemo } from 'react'
import { parseDate } from 'shared/lib/parse-date'
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
    <Typography as='span' className={className} {...restProps}>
      {parsedDate}
    </Typography>
  )
}

DateAgo.defaultProps = {
  uppercase: true,
  color: 'secondary',
}
