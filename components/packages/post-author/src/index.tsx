import styled from '@emotion/styled'
import Typography from '@razrabs-ui/typography'
import type { ElementType, FC, ReactNode } from 'react'
import { CSSProperties, forwardRef } from 'react'

type StyleBadgeProps = {
  letterSpacing?: CSSProperties['letterSpacing']
  margin?: CSSProperties['margin']
}
const StyledTypography = styled(Typography)<StyleBadgeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: fit-content;
  column-gap: 4px;

  margin: ${({ margin }) => (margin ? margin : 0)};

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.primary};
`

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.brand};
`

type BadgeProps = {
  as?: ElementType
  className?: string
  url?: string | null
  children?: ReactNode
} & StyleBadgeProps
const PostAuthor: FC<BadgeProps> = forwardRef<any, BadgeProps>(
  ({ as = 'span', children, url, ...props }, ref) => (
    <StyledTypography uppercase as={as} ref={ref} size='sm' {...props}>
      Автор статьи:
      <StyledLink href={url ?? undefined}>{children}</StyledLink>
    </StyledTypography>
  ),
)
PostAuthor.defaultProps = {
  letterSpacing: 1,
}

PostAuthor.displayName = 'PostAuthor'

export default PostAuthor
