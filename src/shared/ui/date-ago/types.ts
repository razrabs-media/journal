import { TypographyProps } from '@razrabs-ui/typography'

export type Props = {
  date: number
  className?: string
  distance?: number
} & Partial<TypographyProps>
