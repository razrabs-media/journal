import styled from '@emotion/styled'

interface ComponentProps {
  color: string
}

export const LinkList = styled.div<ComponentProps>`
  display: grid;
  grid-template-columns: 40% 20% 40%;
  text-align: center;
  align-items: center;
  height: 54px;
  border-bottom: 1px solid ${(props) => props.color};
`
