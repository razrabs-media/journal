import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { useMemo, useState } from 'react'

export const useCurrentDate = () => {
  const [minutes, setMinutes] = useState<number>(0)

  setInterval(() => {
    setMinutes(new Date().getMinutes())
  }, 60000)

  const currentDate = useMemo(
    () =>
      format(Date.now(), 'dd MMMM, H:mm', {
        locale: ru,
      }),
    [minutes],
  )

  return { currentDate }
}
