import { GithubAuthor } from 'shared/api'

export type PickedGithubAuthor = Pick<
  GithubAuthor,
  'avatarUrl' | 'uid' | 'name' | 'usernameUrl'
>

export type Props = {
  uid: string
  title: string
  description: string
  previewUrl?: string
  tags?: string[]
  publicationDate: string
  githubAuthor?: PickedGithubAuthor
  content: string
}
