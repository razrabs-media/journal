import { useEffect } from 'react'

let focused = false

const getScroll = (): HTMLElement | null => document.getElementById('scroll')
const getNext = (): HTMLElement | null => document.getElementById('__next')

const resize = (height: number) => {
  const scroll = getScroll()
  if (!scroll) return

  const next = getNext()
  if (!next) return

  scroll.style.height = `${height}px`
}

const windowScrollListener = () => {
  if (focused) return

  const scroll = getScroll()
  scroll?.parentElement?.scrollTo(0, window.scrollY)
}

const mainScrollListener = () => {
  if (!focused) return

  const scroll = getScroll()
  window.scrollTo(0, scroll?.parentElement?.scrollTop || 0)
}

const mouseEnter = () => (focused = true)
const mouseLeave = () => (focused = false)

const getResizeObserve = (): ResizeObserver => {
  let prevHeight = 0

  return new ResizeObserver((entries) => {
    for (const { contentRect } of entries) {
      const { height } = contentRect

      if (prevHeight !== height) {
        prevHeight = height
        resize(height)
      }
    }
  })
}

export const useSyncScroll = () => {
  useEffect(() => {
    const ro = getResizeObserve()
    const next = getNext()
    const scroll = getScroll()
    const parentScroll = scroll?.parentElement

    window.addEventListener('scroll', windowScrollListener)

    parentScroll?.addEventListener('scroll', mainScrollListener)
    parentScroll?.addEventListener('mouseenter', mouseEnter)
    parentScroll?.addEventListener('mouseleave', mouseLeave)

    if (next) ro.observe(next)

    return () => {
      window.removeEventListener('scroll', windowScrollListener)

      parentScroll?.removeEventListener('scroll', mainScrollListener)
      parentScroll?.removeEventListener('mouseenter', mouseEnter)
      parentScroll?.removeEventListener('mouseleave', mouseLeave)

      ro.disconnect()
    }
  }, [])
}
