import { Ref, useEffect, useImperativeHandle, useRef, useState } from 'react'

const HIGHLIGHT_DELAY = 1000

export const useHighlighting = <T>(initialRef: Ref<T>): [Ref<T>, boolean] => {
  const ref = useRef<T>(null)
  const [isHighlighted, setIsHighlighted] = useState(false)

  useImperativeHandle<T | null, T | null>(initialRef, () =>
    ref.current
      ? Object.assign(ref.current, {
          highlight: () => {
            setIsHighlighted(true)
          },
        })
      : null,
  )

  useEffect(() => {
    if (isHighlighted) {
      setTimeout(() => {
        setIsHighlighted(false)
      }, HIGHLIGHT_DELAY)
    }
  }, [isHighlighted])

  return [ref, isHighlighted]
}
