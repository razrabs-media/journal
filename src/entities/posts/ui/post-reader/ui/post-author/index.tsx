import styled from '@emotion/styled'
import type { ElementType, FC, ReactNode } from 'react'
import { CSSProperties, forwardRef } from 'react'
import { Typography } from 'shared/ui'

type StyleBadgeProps = {
  letterSpacing?: CSSProperties['letterSpacing']
  margin?: CSSProperties['margin']
}
const StyledTypography = styled(Typography)<StyleBadgeProps>`
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  font-family: 'Inter', Arial, sans-serif;
  color: ${({ theme }) => theme.colors.primary};
`

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 1px;
  font-family: 'Inter', Arial, sans-serif;
  text-transform: uppercase;
`

type BadgeProps = {
  as?: ElementType
  className?: string
  url?: string | null
  children?: ReactNode
} & StyleBadgeProps
const PostAuthor: FC<BadgeProps> = forwardRef<any, BadgeProps>(
  ({ as = 'span', children, url, ...props }, ref) => (
    <StyledTypography
      itemScope
      uppercase
      as={as}
      itemProp='author'
      itemType='https://schema.org/Person'
      margin='0 0 8px 0'
      ref={ref}
      size='sm'
      {...props}
    >
      <StyledLink
        href={url ?? undefined}
        itemProp='url'
        rel='ugc'
        target='_blank'
      >
        <StyledLink as='span' itemProp='name'>
          {children}
        </StyledLink>
      </StyledLink>
    </StyledTypography>
  ),
)
PostAuthor.defaultProps = {
  letterSpacing: 1,
}

PostAuthor.displayName = 'PostAuthor'

export default PostAuthor
