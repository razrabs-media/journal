import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { FC, useCallback, useEffect, useState } from 'react'
import { Typography } from 'shared/ui/typography'

export const LiveTime: FC = () => {
  const getTime = useCallback(
    () => format(new Date(), 'd MMMM,  H:mm', { locale: ru }),
    [],
  )
  const [dateNow, setDate] = useState(getTime())
  useEffect(() => {
    const time = setInterval(() => {
      setDate(getTime)
    }, 1000)
    return () => clearInterval(time)
  }, [getTime])
  return (
    <Typography uppercase color='rare' letterSpacing='normal'>
      {dateNow}
    </Typography>
  )
}
