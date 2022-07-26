import { useEffect, useRef } from 'react'

export const useResize = () => {
  const baseRef = useRef<HTMLDivElement>(null)
  const changedRef = useRef<HTMLDivElement>(null)

  const getResizeObserve = (): ResizeObserver =>
    new ResizeObserver((entries) => {
      for (const { contentRect } of entries) {
        const logo = changedRef.current

        if (logo) {
          logo.style.setProperty('width', `${contentRect.width}px`)
        }
      }
    })

  useEffect(() => {
    const ro = getResizeObserve()

    if (baseRef.current) ro.observe(baseRef.current)

    return () => {
      ro.disconnect()
    }
  }, [])

  return [baseRef, changedRef]
}
