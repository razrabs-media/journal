import { useEffect } from 'react'

export const useDisableScroll = (hide: boolean) => {
  useEffect(() => {
    const { body } = document
    body.style.overflowY = hide ? 'auto' : 'hidden'
  }, [hide])
}
