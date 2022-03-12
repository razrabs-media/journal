import { Copyleft, SiteTitle, WrapperFooter } from './styles'
import React, { FC } from 'react'
import { useTheme } from '@emotion/react'
import { Typography } from 'shared/ui/typography'

export const Footer: FC = () => {
    const theme = useTheme()
    return (
        <WrapperFooter color={theme.colors.primary.contrast}>
            <Copyleft>
                <Typography uppercase>in code we trust since 2021</Typography>
            </Copyleft>

            <SiteTitle>разрабы</SiteTitle>
        </WrapperFooter>
    )
}
