import { FC, useEffect, useRef } from 'react'

import { StyledDiscardCommentButton } from './styled'

type Props = {
  className?: string
  children: string
  onSuccess?: () => void
  onDiscard?: () => unknown
}
export const DiscardCommentButton: FC<Props> = ({
  className,
  children,
  onSuccess,
  onDiscard,
}) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      if (onSuccess) {
        onSuccess()
      }
    })

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [onSuccess])

  const onClick = () => {
    if (onDiscard) {
      onDiscard()
    }
  }

  return (
    <StyledDiscardCommentButton
      className={className}
      icon='right'
      onClick={onClick}
    >
      {children}
    </StyledDiscardCommentButton>
  )
}
