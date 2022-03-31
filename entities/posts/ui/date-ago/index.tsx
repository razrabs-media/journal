import { formatDistance } from 'date-fns'
import { ru } from 'date-fns/locale'
import { VFC } from 'react'
import { Typography } from 'shared/ui'
import { Props } from './types'

export const DateAgo: VFC<Props> = ({ date }) => (
  <Typography transparent uppercase>
    {formatDistance(date, Date.now(), {
      locale: ru,
      addSuffix: true,
    })}
  </Typography>
)
