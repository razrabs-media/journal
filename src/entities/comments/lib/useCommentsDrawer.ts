import { useCallback, useState } from 'react'

export const useCommentsDrawer = () => {
  const [commentsOpened, setCommentsOpened] = useState(false)

  const openCommentsHandler = useCallback(() => {
    setCommentsOpened(true)
  }, [setCommentsOpened])

  const closeCommentsHandler = useCallback(() => {
    setCommentsOpened(false)
  }, [setCommentsOpened])

  return { openCommentsHandler, closeCommentsHandler, commentsOpened }
}
