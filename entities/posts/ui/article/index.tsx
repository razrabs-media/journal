import styled from '@emotion/styled'
import { VFC } from 'react'
import { MarkdownRenderer } from 'shared/ui'

const StyledArticle = styled.article``

const Header = styled.header<{ minHeight?: number }>`
  min-height: ${({ minHeight }) => minHeight || 'auto'};

  border-bottom: 1px solid ${({ theme }) => theme.colors.text.primary};
`

const Title = styled.h1`
  font-size: 32px;
  line-height: 120%;

  text-transform: uppercase;
  font-feature-settings: 'salt' on;
`

const Description = styled.p`
  font-size: 24px;
  line-height: 120%;

  font-feature-settings: 'salt' on;

  color: ${({ theme }) => theme.colors.text.secondary};
`

const Content = styled.div`
  margin-top: 80px;
`

type PostArticleProps = {
  title: string
  description: string
  content: string

  headerMinHeight?: number
}

export const PostArticle: VFC<PostArticleProps> = ({
  title,
  description,
  content,
  headerMinHeight,
}) => (
  <StyledArticle>
    <Header minHeight={headerMinHeight}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Header>

    <Content>
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </Content>
  </StyledArticle>
)
