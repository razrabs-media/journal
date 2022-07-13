import { differenceInMilliseconds } from 'date-fns'
import { useEffect } from 'react'

let mainDate = new Date()
let windowDate = new Date()

const getMain = (): HTMLElement | null => document.getElementById('main')
const getNext = (): HTMLElement | null => document.getElementById('__next')

const resize = () => {
  const main = getMain()
  if (!main) return

  const next = getNext()
  if (!next) return

  const scrollHeight = main.scrollHeight - main.clientHeight
  next.style.height = `${window.innerHeight + scrollHeight}px`
}

const windowScrollListener = () => {
  if (differenceInMilliseconds(new Date(), mainDate) < 100) return

  const main = getMain()
  main?.scrollTo(0, window.scrollY)
  windowDate = new Date()
}

const mainScrollListener = () => {
  if (differenceInMilliseconds(new Date(), windowDate) < 100) return

  const main = getMain()
  window.scrollTo(0, main?.scrollTop || 0)
  mainDate = new Date()
}

const getResizeObserve = (): ResizeObserver => {
  let prevHeight = 0

  return new ResizeObserver((entries) => {
    for (const { contentRect } of entries) {
      const { height } = contentRect

      if (prevHeight !== height) {
        prevHeight = height
        resize()
      }
    }
  })
}

export const useSyncScroll = () => {
  useEffect(() => {
    const main = getMain()
    const next = getNext()
    const ro = getResizeObserve()

    window.addEventListener('scroll', windowScrollListener)
    main?.addEventListener('scroll', mainScrollListener)

    if (next) ro.observe(next)

    return () => {
      window.removeEventListener('scroll', windowScrollListener)
      main?.removeEventListener('scroll', mainScrollListener)
      ro.disconnect()
    }
  }, [])
}
