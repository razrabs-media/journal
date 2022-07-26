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
    target && disableBodyScroll(target, { allowTouchMove: () => true })
  }

  const attachEvents = () => {
    if (ref.current) {
      document.body.addEventListener('touchstart', onHide, { passive: true })
      document.body.addEventListener('touchmove', onHide, { passive: true })
      document.body.addEventListener('mouseover', onHide, { passive: true })
      document.body.addEventListener('wheel', onHide, { passive: true })

      ref.current.addEventListener('touchstart', onShow, { passive: true })
      ref.current.addEventListener('touchmove', onShow, { passive: true })
      ref.current.addEventListener('mouseover', onShow, { passive: true })
      ref.current.addEventListener('wheel', onShow, { passive: true })
    }
  }

  const detachEvents = () => {
    if (ref.current) {
      document.body.removeEventListener('touchstart', onHide)
      document.body.removeEventListener('touchmove', onHide)
      document.body.removeEventListener('mouseover', onHide)
      document.body.removeEventListener('wheel', onHide)

      ref.current.removeEventListener('touchstart', onShow)
      ref.current.removeEventListener('touchmove', onShow)
      ref.current.removeEventListener('mouseover', onShow)
      ref.current.removeEventListener('wheel', onShow)
    }
  }
  useEffect(() => {
    if (opened) {
      ref.current &&
        disableBodyScroll(ref.current, { allowTouchMove: () => true })
      attachEvents()
    }

    return () => {
      detachEvents()
      clearAllBodyScrollLocks()
    }
  })
  return ref
}
