import { useState } from 'react'

export const useCopyToClipboard = () => {
  const [clicked, setClicked] = useState<boolean>(false)

  return {
    clicked,
    onClick() {
      setClicked(!clicked)
      navigator.clipboard.writeText(window.location.href)
      setTimeout(() => setClicked(false), 2000)
    },
  }
}
