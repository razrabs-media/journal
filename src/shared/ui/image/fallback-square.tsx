import { useTheme } from '@emotion/react'

export const FallbackSquare = ({
  w = 80,
  h = 80,
}: {
  w?: number | string
  h?: number | string
}) => {
  const {
    components: { FallbackSquare: themeProps },
  } = useTheme()

  return (
    <svg
      fill='none'
      height={h}
      viewBox='0 0 80 80'
      width={w}
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect height='79' stroke={themeProps.color} width='79' x='0.5' y='0.5' />
      <path d='M0.833008 0.833252L79.1663 79.1666' stroke={themeProps.color} />
      <path d='M79.167 0.833252L0.833655 79.1666' stroke={themeProps.color} />
    </svg>
  )
}
