import { useRouter } from 'next/router'
import { forwardRef, ReactNode } from 'react'
import { SignInContent } from 'entities/sign-in-content'
import { User } from 'entities/user-content'
import { useClientSide } from 'shared/lib'
import { Modal, ModalAction } from 'shared/ui'
import { CurrentUserQuery, useCurrentUserLazyQuery, useSignOut } from '../model'
import type { Props } from './types'

export const Auth = forwardRef<HTMLDivElement, Props>(
  ({ open, onClose }, ref) => {
    const router = useRouter()
    const [currentUserQuery, { data }] = useCurrentUserLazyQuery({
      errorPolicy: 'all',
    })
    const [signOut] = useSignOut({ errorPolicy: 'all' })

    useClientSide(currentUserQuery)

    let Action: ReactNode | undefined
    let Content: ReactNode | undefined

    if (data?.currentUser) {
      Action = (
        <ModalAction
          icon='right'
          onClick={() =>
            signOut({
              update: (cache) => {
                cache.writeQuery({
                  query: CurrentUserQuery,
                  data: { currentUser: null },
                })
              },
            })
          }
        >
          Разлогиниться
        </ModalAction>
      )

      Content = (
        <User
          avatarUrl={data.currentUser.profile?.avatarUrl ?? ''}
          commentsCount={data.currentUser.commentsCount}
          login={data.currentUser.login}
          name={data.currentUser.profile?.fullName ?? ''}
          postsCount={data.currentUser.postsCount}
          registrationDate={data.currentUser.profile?.createdAt ?? ''}
        />
      )
    } else {
      Action = (
        <ModalAction icon='right' onClick={() => router.push('/auth/github')}>
          Залогиниться через github
        </ModalAction>
      )
      Content = SignInContent
    }
    return (
      <Modal
        action={Action}
        content={Content}
        hide={!open}
        ref={ref}
        title='АКК'
        onClose={onClose}
      />
    )
  },
)

Auth.displayName = 'Auth'
