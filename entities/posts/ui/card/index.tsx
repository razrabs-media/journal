import { VFC } from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { Post } from 'shared/api/types'
import { Typography } from 'shared/ui/typography'
import { PostFooter } from './footer'
import * as styles from './styles'

const PostCard: VFC<Post> = ({ title, timeInfo }) => {
    const theme = useTheme()

    return (
        <article className={styles.article}>
            <div
                className={css`
                    height: 150px;
                    background-color: ${theme.colors.secondary.main};
                `}
            />
            <Typography uppercase size='large'>
                {title}
            </Typography>

            <PostFooter isChiefEditor timeInfo={timeInfo} />
        </article>
    )
}
export { PostCard }
