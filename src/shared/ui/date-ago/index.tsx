import { format, formatDistanceStrict, isBefore, subDays } from 'date-fns'
import { ru } from 'date-fns/locale'
import { FC, useMemo } from 'react'
import { Typography } from '..'
import { Props } from './types'

export const DateAgo: FC<Props> = ({ date, distance = 7, className }) => {
  // Если больше, чем distance (7) дней назад - показываем полную дату
  const isFullDate = useMemo(
    () => isBefore(date, subDays(new Date(), distance)),
    [date, distance],
  )

  return (
    <Typography transparent uppercase as='span' className={className}>
      {isFullDate
        ? format(date, 'd.m.yy')
        : formatDistanceStrict(date, new Date(), {
            locale: ru,
            addSuffix: true,
          })}
    </Typography>
  )
}
