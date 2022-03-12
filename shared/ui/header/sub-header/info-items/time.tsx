import React, { FC } from 'react'
import { useTheme } from '@emotion/react'
import { Circle } from '../styles/Circle'
import { DateTime } from '../styles/DateTime'
import { LiveTime } from 'shared/lib/live-time'

export const Time: FC = () => {
    const theme = useTheme()
    return (
        <DateTime>
            <Circle color={theme.colors.secondary.main} />
            <LiveTime />
        </DateTime>
    )
}
