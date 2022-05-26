import { useCallback, useState } from 'react'

type UseBoolean = (initValue?: boolean) => [
  boolean,
  {
    trusty: VoidFunction
    falsy: VoidFunction
    toggle: VoidFunction
  },
]

export const useBoolean: UseBoolean = (initValue = false) => {
  const [state, setState] = useState(initValue)
  const trusty = useCallback(() => setState(true), [])
  const falsy = useCallback(() => setState(false), [])
  const toggle = useCallback(() => setState((prevState) => !prevState), [])
  return [state, { trusty, falsy, toggle }]
}
