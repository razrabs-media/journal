import { PostOnFrontPage } from 'shared/api'

type FrontPageContent = Pick<PostOnFrontPage, 'position'>[]

export function sortContent(content: FrontPageContent): FrontPageContent {
  const copy = [...content]

  copy
    .sort((a, b) => a.position.x - b.position.x)
    .sort((a, b) => a.position.y - b.position.y)

  return copy
}
