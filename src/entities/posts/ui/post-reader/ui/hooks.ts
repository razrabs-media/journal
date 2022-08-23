import { MutableRefObject, useEffect, useRef, useState } from 'react'

export const useBlockVisible = (): [MutableRefObject<any>, boolean] => {
  const block = useRef()
  const [isBlockVisible, setIsBlockVisible] = useState(false)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      setIsBlockVisible(entries[0].intersectionRatio <= 0)
    })
    intersectionObserver.observe((block as MutableRefObject<any>).current)

    return () => {
      intersectionObserver.disconnect()
    }
  }, [setIsBlockVisible])

  return [block, isBlockVisible]
}
