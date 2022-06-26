import {Ref, useEffect, useRef} from 'react'

export const useEscape = <T extends HTMLElement>(
  onEscape: VoidFunction,
): Ref<T> | undefined => {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onEscape()
      }
    }

    const handelKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onEscape()
      }
    }

    document.addEventListener('keydown', handelKeyDown)
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('keydown', handelKeyDown)
      document.removeEventListener('mousedown', handleClick)
    }
  }, [onEscape, ref])

  return ref
}
