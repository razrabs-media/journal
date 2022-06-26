import { PickedGithubAuthor } from '../types'

import { ReactElement } from 'react'

export type Props = {
  uid: string
  title: string
  description: string
  previewUrl?: string
  publicationDate: string
  tags?: string[]
  githubAuthor?: PickedGithubAuthor

  commentsButton?: ReactElement
}
