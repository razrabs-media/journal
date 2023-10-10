import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import type { CSSProperties, FC } from 'react'
import { Badge } from 'shared/ui'

type BackgroundProps = {
  w?: CSSProperties['width']
  h?: CSSProperties['height']
}
const Background = styled(Badge)<BackgroundProps>`
  width: ${({ w }) => (typeof w === 'number' ? `${w}px` : w)};
  height: ${({ h }) => (typeof h === 'number' ? `${h}px` : h)};
`

// TODO: вынести все иконки в отдельный пакет
export const VideoIcon = () => {
  const {
    colors: { primary },
  } = useTheme()

  return (
    <svg
      fill='none'
      height='12'
      viewBox='0 0 9 12'
      width='9'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9 6L1.41795e-06 11.1962L1.87221e-06 0.803847L9 6Z'
        fill={primary}
      />
    </svg>
  )
}

type VideoBadgeProps = {
  className?: string
} & BackgroundProps
export const VideoBadge: FC<VideoBadgeProps> = ({ className, w, h }) => (
  <Background className={className} color='brand' h={h} w={w}>
    <VideoIcon />
  </Background>
)

VideoBadge.defaultProps = {
  w: 64,
  h: 32,
}
