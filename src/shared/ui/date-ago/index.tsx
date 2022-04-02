import { format, formatDistanceToNow, isBefore, subDays } from 'date-fns'
import { ru } from 'date-fns/locale'
import { useMemo, VFC } from 'react'
import { Typography } from 'shared/ui'
import { Props } from './types'

export const DateAgo: VFC<Props> = ({ date, distance = 7 }) => {
  // Если больше, чем distance (7) дней назад - показываем полную дату
  const isFullDate = useMemo(
    () => isBefore(date, subDays(new Date(), distance)),
    [date, distance],
  )

  return (
    <Typography transparent uppercase>
      {isFullDate
        ? format(date, 'd.m.yy')
        : formatDistanceToNow(date, { locale: ru, addSuffix: true })}
    </Typography>
  )
}
