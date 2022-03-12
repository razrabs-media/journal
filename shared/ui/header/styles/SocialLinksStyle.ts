import styled from '@emotion/styled'

interface ComponentProps {
  color: string
  contextMenu: string
}

export const SocialLinksStyle = styled.div<ComponentProps>`
  background: ${(props) => props.color};
  display: ${(props) => props.contextMenu};
  animation-duration: 300ms;
`
