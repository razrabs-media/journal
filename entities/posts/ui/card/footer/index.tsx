import React, { FC } from 'react'
import { css } from '@emotion/css'
import { Typography } from 'shared/ui/typography'
import { Mark } from 'shared/ui/mark'
import { Props } from './types'

export const PostFooter: FC<Props> = ({ timeInfo, isChiefEditor }) => (
  <div
    className={css`
      display: flex;
      align-items: center;
      gap: 15px;
    `}
  >
    {isChiefEditor && <Mark />}
    {timeInfo && (
      <Typography uppercase size='small'>
        {timeInfo}
      </Typography>
    )}
  </div>
)
