import { useEffect } from 'react'

const getNext = (): HTMLElement | null => document.getElementById('logo')

const getResizeObserve = (): ResizeObserver =>
  new ResizeObserver((entries) => {
    for (const { contentRect } of entries) {
      const logo = getNext()

      if (logo) {
        logo.style.setProperty('--width', `${contentRect.width}px`)
      }
    }
  })

export const useResizeWidth = () => {
  useEffect(() => {
    const logo = getNext()
    const ro = getResizeObserve()

    if (logo) ro.observe(logo)

    return () => {
      ro.disconnect()
    }
  }, [])
}
