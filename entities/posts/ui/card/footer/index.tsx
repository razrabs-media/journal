import React, { FC } from 'react'
import { css } from '@emotion/css'
import { Props } from './types'

export const PostFooter: FC<Props> = ({ timeInfo }) => (
  <div
    className={css`
      display: flex;
      align-items: center;
      gap: 15px;
    `}
  />
)
