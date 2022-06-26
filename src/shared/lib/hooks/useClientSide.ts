import { useEffect } from 'react'

export const useClientSide = (lazyHook: VoidFunction): void => {
  useEffect(() => {
    lazyHook()
  }, [lazyHook])
}
