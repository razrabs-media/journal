import { ReactElement } from 'react'
import { PickedGithubAuthor } from '../types'

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
