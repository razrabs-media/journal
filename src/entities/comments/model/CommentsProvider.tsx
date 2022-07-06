import { useRouter } from 'next/router'
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useCommentsDrawer } from '../lib/useCommentsDrawer'
import { Comment } from '../model'

export type CommentsContextValue = {
  opened: boolean

  comments?: Comment[]
  setComments: Dispatch<SetStateAction<Comment[] | undefined>>

  postUid?: string
  setPostUid: Dispatch<string>

  openHandler: (...args: never[]) => void
  closeHandler: (...args: never[]) => void
}

export const CommentsContext = createContext<CommentsContextValue>({
  opened: false,

  comments: undefined,
  setComments: () => undefined,

  postUid: undefined,
  setPostUid: () => undefined,

  openHandler: () => undefined,
  closeHandler: () => undefined,
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
  const [postUid, setPostUid] = useState<string | undefined>(undefined)

  const value = {
    opened: commentsOpened,
    comments,
    setComments,
    postUid,
    setPostUid,
    openHandler: openCommentsHandler,
    closeHandler: closeCommentsHandler,
  }

  // Закрываем комменты, когда уходим со страницы
  useEffect(() => {
    closeCommentsHandler()
  }, [closeCommentsHandler, router.route])

  return (
    <CommentsContext.Provider value={{ ...value }}>
      {children}
    </CommentsContext.Provider>
  )
}
