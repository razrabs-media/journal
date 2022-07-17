import { useTheme } from '@emotion/react'

export const FallbackX = () => {
  const {
    components: { FallbackX: themeProps },
  } = useTheme()

  return (
    <svg
      fill='none'
      height='140'
      viewBox='0 0 10 10'
      width='10'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M1 9L9 1' stroke={themeProps.color} />
      <path d='M9 9L1 1' stroke={themeProps.color} />
    </svg>
  )
}
