import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock'
import { useEffect, useRef } from 'react'

export const useDisableScroll = (opened: boolean) => {
  const ref = useRef<HTMLDivElement>(null)

  const onHide = () => {
    const target = ref.current
    target && enableBodyScroll(target)
  }

  const onShow = (e: TouchEvent | Event) => {
    const target = ref.current
    e.stopImmediatePropagation()
    e.stopPropagation()
    target && disableBodyScroll(target)
  }

  const attachEvents = () => {
    if (ref.current) {
      document.body.addEventListener('touchmove', onHide, { passive: true })
      document.body.addEventListener('wheel', onHide, { passive: true })

      ref.current.addEventListener('touchmove', onShow, { passive: true })
      ref.current.addEventListener('wheel', onShow, { passive: true })
    }
  }

  const detachEvents = () => {
    if (ref.current) {
      document.body.removeEventListener('touchmove', onHide)
      document.body.removeEventListener('wheel', onHide)

      ref.current.removeEventListener('touchmove', onShow)
      ref.current.removeEventListener('wheel', onShow)
    }
  }
  useEffect(() => {
    if (opened) attachEvents()

    return () => {
      if (opened) detachEvents()

      clearAllBodyScrollLocks()
    }
  })
  return ref
}
