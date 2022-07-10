import { RefObject, useEffect, useRef } from 'react'

const lisener = () => {
  // document.documentElement.style.setProperty(
  //   '--scroll-y',
  //   `${}px`,
  // )
  // const element = document.getElementById('MainGrid')
  // console.log(element?.scrollTop)
  // window.scrollTo(0, (element?.scrollTop || 0) * 1)
  console.log('kek')
}

export const useQueryParamsStore = <T>(): RefObject<T> => {
  const ref = useRef<T>(null)
  console.log(ref)
  useEffect(() => {
    window.addEventListener('scroll', lisener)
    // const element = document.getElementById('MainGrid')
    // element?.addEventListener('scroll', lisener)
    // console.log(element)
    // if (hide) closeDialog()
    // else showDialog()

    return () => {
      window.removeEventListener('scroll', lisener)
      // element?.removeEventListener('scroll', lisener)
    }
  }, [])
  return ref
}
