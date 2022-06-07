import { TypographyProps } from '@razrabs-ui/typography'

export type Props = {
  date: string
  className?: string
  distance?: number
} & Partial<TypographyProps>
