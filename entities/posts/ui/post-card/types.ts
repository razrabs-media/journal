// eslint-disable-next-line boundaries/element-types
import { CurrentFrontPage } from 'features/front-page'
import { Configuration, Position, PostItem } from 'shared/api'

export type Props = {
  configuration: Configuration
  position: Position
  post: CurrentFrontPage['currentFrontPage']['content']['0']['post']
}
