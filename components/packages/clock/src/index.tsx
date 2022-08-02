import styled from '@emotion/styled'
import Typography from '@razrabs-ui/typography'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import type { FC } from 'react'
import { forwardRef, useEffect, useMemo, useRef, useState } from 'react'

type ClockProps = {
  currentTime: string
}

const StyledTypography = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: fit-content;
  column-gap: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.secondary};

  &:before {
    content: '';
    z-index: 1;
    height: 11px;
    width: 11px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.brand};
  }
`

const Clock: FC<ClockProps> = forwardRef<any, ClockProps>(
  ({ currentTime }, ref) => {
    const initialTime = useMemo(() => {
      const date = new Date(currentTime)
      return date.valueOf()
    }, [currentTime])

    const [time, setTime] = useState<number>(initialTime)

    const workerRef = useRef<Worker>()
    useEffect(() => {
      workerRef.current = new Worker(new URL('./worker', import.meta.url))
      workerRef.current?.postMessage({ event: 'start', initialTime })

      workerRef.current.onmessage = (message) => {
        setTime(message.data)
      }

      return () => {
        workerRef.current?.terminate()
      }
    }, [initialTime])

    return (
      <StyledTypography ref={ref}>
        {format(time, 'd MMMM, H:mm', {
          locale: ru,
        })}
      </StyledTypography>
    )
  },
)

Clock.displayName = 'Clock'

export default Clock
