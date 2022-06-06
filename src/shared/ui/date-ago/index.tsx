import Typography from '@razrabs-ui/typography'
import { format, formatDistanceStrict, isBefore, subDays } from 'date-fns'
import { ru } from 'date-fns/locale'
import { FC, useMemo } from 'react'
import { Props } from './types'

export const DateAgo: FC<Props> = ({
  date,
  distance = 7,
  className,
  ...restProps
}) => {
  // Если больше, чем distance (7) дней назад - показываем полную дату
  const isFullDate = useMemo(
    () => isBefore(date, subDays(new Date(), distance)),
    [date, distance],
  )

  return (
    <Typography as='span' className={className} {...restProps}>
      {isFullDate
        ? format(date, 'd MMMM, H:mm', {
            locale: ru,
          })
        : formatDistanceStrict(date, new Date(), {
            locale: ru,
            addSuffix: true,
          })}
    </Typography>
  )
}

DateAgo.defaultProps = {
  uppercase: true,
  color: 'secondary',
}
