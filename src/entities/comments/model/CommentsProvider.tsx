import { useRouter } from 'next/router'
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useBoolean } from 'shared/lib'
import { useIsTabletAndBelow } from 'shared/ui/theme/responsive'
import { commentAdapter } from '../lib/commentAdapter'
import { Comment, useCommentsLazyQuery } from '.'

export type CommentsContextValue = {
  opened: boolean
  comments: Comment[]
  loading?: boolean
  loaded?: boolean
  postUid?: string
  setPostUid: Dispatch<string>
  openHandler: VoidFunction
  closeHandler: VoidFunction
}

export const CommentsContext = createContext<CommentsContextValue>({
  opened: false,
  comments: [],
  loading: false,
  loaded: false,
  postUid: undefined,
  setPostUid: () => undefined,
  openHandler: () => undefined,
  closeHandler: () => undefined,
})

export const useContextComments = () => useContext(CommentsContext)

type Props = {
  children: ReactNode
}

export const CommentsProvider: FC<Props> = ({ children }) => {
  const router = useRouter()
  const tabletAndBelow = useIsTabletAndBelow()
  const [
    commentsLazyQuery,
    { data, loading, error, startPolling, stopPolling },
  ] = useCommentsLazyQuery()
  const [postUid, setPostUid] = useState<string | undefined>(undefined)
  const [opened, { trusty: openHandler, falsy: closeHandler }] = useBoolean()
  const comments = useMemo(
    () => data?.comments.items.map((comment) => commentAdapter(comment)) || [],
    [data?.comments.items],
  )

  const value: CommentsContextValue = {
    opened,
    comments,
    loading,
    loaded: !!data || !!error,
    postUid,
    setPostUid,
    openHandler,
    closeHandler,
  }

  // Закрываем комменты, когда уходим со страницы
  useEffect(() => {
    if (router.route === '/post/[uid]' && !tabletAndBelow) {
      openHandler()
    }

    return () => closeHandler()
  }, [closeHandler, openHandler, router.route, tabletAndBelow])

  useEffect(() => {
    if (postUid) {
      commentsLazyQuery({
        variables: { postUid, perPage: 3_000 },
        fetchPolicy: 'no-cache',
      })
    }
  }, [commentsLazyQuery, opened, postUid])

  useEffect(() => {
    if (opened) {
      startPolling(30_000)
    }
    return () => stopPolling()
  }, [opened, startPolling, stopPolling])

  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  )
}
