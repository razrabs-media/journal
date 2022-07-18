import {
  format,
  formatDistanceStrict,
  isBefore,
  isThisYear,
  parseISO,
  subDays,
} from 'date-fns'
import { ru } from 'date-fns/locale'

type Options = {
  distance?: number
  format?: 'short'
}

export function parseDate(date: string, options?: Options): string | undefined {
  const fromIso = parseISO(date)
  const isShortFormat = options?.format === 'short'

  const greaterThanWeek = isBefore(
    fromIso,
    subDays(new Date(), options?.distance ?? 7),
  )

  if (!isThisYear(fromIso)) {
    const formattedDate = format(
      fromIso,
      `d ${isShortFormat ? 'MMM' : 'MMMM'} yyyy`,
      {
        locale: ru,
      },
    )

    return isShortFormat ? formattedDate.replace('.', '') : formattedDate
  }

  if (greaterThanWeek) {
    const formattedDate = format(
      fromIso,
      `d ${isShortFormat ? 'MMM' : 'MMMM'}`,
      {
        locale: ru,
      },
    )

    return isShortFormat ? formattedDate.replace('.', '') : formattedDate
  }

  const formattedDistanceDate = formatDistanceStrict(fromIso, new Date(), {
    locale: ru,
    addSuffix: !isShortFormat,
  })

  return isShortFormat
    ? formattedDistanceDate
        .replace(/с([а-я]+)/gi, 'сек')
        .replace(/м([а-я]+)/gi, 'м')
        .replace(/ч([а-я]+)/gi, 'ч')
        .replace(/д([а-я]+)/gi, 'д')
    : formattedDistanceDate
}
