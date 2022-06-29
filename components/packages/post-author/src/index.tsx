import styled from '@emotion/styled'
import Typography from '@razrabs-ui/typography'
import type { ElementType, FC, ReactNode } from 'react'
import { CSSProperties, forwardRef } from 'react'

type StyleBadgeProps = {
  letterSpacing?: CSSProperties['letterSpacing']
}
const StyledTypography = styled(Typography)<StyleBadgeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  margin-bottom: 8px;
  box-sizing: border-box;
  width: fit-content;

  color: ${({ theme }) => theme.colors.primary};
`

type BadgeProps = {
  as?: ElementType
  className?: string
  children?: ReactNode
} & StyleBadgeProps
const PostAuthor: FC<BadgeProps> = forwardRef<any, BadgeProps>(
  ({ as = 'span', children, ...props }, ref) => (
    <StyledTypography uppercase as={as} ref={ref} size='sm' {...props}>
      Автор статьи:
      {children}
    </StyledTypography>
  ),
)
PostAuthor.defaultProps = {
  letterSpacing: 1,
}

PostAuthor.displayName = 'PostAuthor'

export default PostAuthor
