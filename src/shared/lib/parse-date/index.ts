import {
  format,
  formatDistanceStrict,
  isBefore,
  parseISO,
  subDays,
} from 'date-fns'
import { ru } from 'date-fns/locale'

export function parseDate(date?: string, distance = 7): string | undefined {
  if (!date) {
    return undefined
  }

  const fromIso = parseISO(date)

  // Если больше, чем distance (7) дней назад - показываем полную дату
  const isFullDate = isBefore(fromIso, subDays(new Date(), distance))

  return isFullDate
    ? format(fromIso, 'd MMMM, H:mm', {
        locale: ru,
      })
    : formatDistanceStrict(fromIso, new Date(), {
        locale: ru,
        addSuffix: true,
      })
}
