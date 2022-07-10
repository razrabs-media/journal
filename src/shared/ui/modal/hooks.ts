import { useEffect } from 'react'

const showDialog = () => {
  const { body } = document
  body.style.overflow = 'hidden'
}
const closeDialog = () => {
  const { body } = document
  body.style.overflow = 'auto'
}
export const useDisableScroll = (hide: boolean) => {
  useEffect(() => {
    if (hide) closeDialog()
    else showDialog()
  }, [hide])
}
