import { Configuration, Position } from '__generated__/types'
import { CurrentFrontPage } from 'feature/front-page/model'

export type Props = {
  configuration: Configuration
  position: Position
  post: CurrentFrontPage['currentFrontPage']['content']['0']['post']
}
