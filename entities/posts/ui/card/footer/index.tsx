import React, { FC } from 'react'
import { css } from '@emotion/css'
import { Typography } from 'shared/ui/typography'
import { Props } from './types'

export const PostFooter: FC<Props> = ({ timeInfo }) => (
  <div
    className={css`
      display: flex;
      align-items: center;
      gap: 15px;
    `}
  >
    {timeInfo && (
      <Typography uppercase size='small'>
        {timeInfo}
      </Typography>
    )}
  </div>
)
