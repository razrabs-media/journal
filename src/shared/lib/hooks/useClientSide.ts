import {useEffect, useState} from 'react'

export const useClientSide = (lazyHook: VoidFunction): void => {
  const [state, setState] = useState(false)

  useEffect(() => {
    if (state) lazyHook()
    else setState(true)
  }, [lazyHook, state])
}
