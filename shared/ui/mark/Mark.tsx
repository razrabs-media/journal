import { FC } from 'react'
import { useTheme } from '@emotion/react'
import { css } from '@emotion/css'
import { Typography } from '../typography'

export const Mark: FC = () => {
    const theme = useTheme()
    return (
        <div
            className={css`
                background: ${theme.colors.secondary.main};
                height: 28px;
                width: 126px;
                display: flex;
                justify-content: center;
                align-items: center;
            `}
        >
            <Typography uppercase color='contrast' colorVariant='secondary'>
                От главреда
            </Typography>
        </div>
    )
}
