import {useEffect} from 'react'

const showDialog = () => {
  const { body } = document
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y')
  body.style.position = 'fixed'
  body.style.top = `-${scrollY}`
}
const closeDialog = () => {
  const { body } = document
  const scrollY = body.style.top
  body.style.position = ''
  body.style.top = ''
  window.scrollTo(0, parseInt(scrollY || '0') * -1)
}
const lisener = () => {
  document.documentElement.style.setProperty(
    '--scroll-y',
    `${window.scrollY}px`,
  )
}

export const useDisableScroll = (hide: boolean) => {
  useEffect(() => {
    window.addEventListener('scroll', lisener)

    if (hide) closeDialog()
    else showDialog()

    return () => {
      window.removeEventListener('scroll', lisener)
    }
  }, [hide])
}
