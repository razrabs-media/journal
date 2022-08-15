import { PickedGithubAuthor } from '../types'

export type Props = {
  uid: string
  title: string
  previewUrl?: string
  publicationDate: string
  open: boolean
  isShowDataAside: boolean
  tags?: string[]
  githubAuthor?: PickedGithubAuthor
}
