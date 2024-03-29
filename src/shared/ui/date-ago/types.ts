import { TypographyProps } from 'shared/ui/typography'

export type Props = {
  date: string
  className?: string
  distance?: number
  format?: 'short'
} & Partial<TypographyProps>
