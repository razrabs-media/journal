import { Typography } from 'shared/ui'
import { StyledEmptyComments } from './styled'

export const CommentsEmpty = () => (
  <StyledEmptyComments>
    <Typography uppercase size='xl' weight='medium'>
      Комментов ещё нет
    </Typography>
    <Typography style={{ marginTop: 16 }} weight='normal'>
      Поделись своим мнением с&nbsp;комьюнити первым, но постарайся исключить
      спам и&nbsp;оскорбления
    </Typography>
  </StyledEmptyComments>
)
