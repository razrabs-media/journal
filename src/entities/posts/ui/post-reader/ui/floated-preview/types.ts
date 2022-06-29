import { PickedGithubAuthor } from '../types'

export type Props = {
  shouldDisplay: boolean
  transitionTime: number
  previewUrl?: string
  title: string
  publicationDate: string
  githubAuthor?: PickedGithubAuthor
  tags?: string[]
}
