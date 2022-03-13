import { VFC } from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { PostFooter } from './footer'
import * as styles from './styles'

const PostCard: VFC<any> = ({ title, timeInfo }) => {
  const theme = useTheme()

  return (
    <article className={styles.article}>
      <PostFooter isChiefEditor timeInfo={timeInfo} />
    </article>
  )
}
export { PostCard }
