import { useEffect } from 'react'

// TODO: удолить
export const useAutoScroll = () => {
  useEffect(() => {
    const content = document.getElementById('content')
    if (content && Math.abs(content.scrollTop) < 160) {
      content.scrollTop = 0
    }
  })
}
