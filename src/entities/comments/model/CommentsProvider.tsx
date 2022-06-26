import { useRouter } from 'next/router'
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useCommentsDrawer } from '../lib/useCommentsDrawer'
import { Comment } from '../model'

export type CommentsContextValue = {
  opened: boolean
  setComments: Dispatch<Comment[]>
  openHandler: (...args: never[]) => void
  closeHandler: (...args: never[]) => void
  comments?: Comment[]
}

export const CommentsContext = createContext<CommentsContextValue>({
  opened: false,
  setComments: () => undefined,
  openHandler: () => undefined,
  closeHandler: () => undefined,
  comments: undefined,
})

export const useComments = () => useContext(CommentsContext)

type Props = {
  children: ReactNode
}
export const CommentsProvider: FC<Props> = ({ children }) => {
  const router = useRouter()

  const { commentsOpened, openCommentsHandler, closeCommentsHandler } =
    useCommentsDrawer()

  const [comments, setComments] = useState<Comment[] | undefined>(undefined)

  // Закрываем комменты, когда уходим со страницы
  useEffect(() => {
    closeCommentsHandler()
  }, [closeCommentsHandler, router.route])

  return (
    <CommentsContext.Provider
      value={{
        opened: commentsOpened,
        comments,
        setComments,
        openHandler: openCommentsHandler,
        closeHandler: closeCommentsHandler,
      }}
    >
      {children}
    </CommentsContext.Provider>
  )
}
