import styled from '@emotion/styled'
import { VFC } from 'react'
import { MarkdownRenderer, ShareButton } from 'shared/ui'

const TagsAndShare = styled.div`
  margin-top: 15px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TagsBlock = styled.div``

const ShareBlock = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  & > button {
    margin-left: 24px;
  }
`

const onEventShareButton = () => {
  if (navigator.share) {
    navigator.share({ url: `${window.location.href}` })
  }
}

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

    <TagsAndShare>
      <TagsBlock />

      <ShareBlock>
        <ShareButton social='twitter' onClick={() => console.log('test2')} />
        <ShareButton social='url' onClick={onEventShareButton} />
      </ShareBlock>
    </TagsAndShare>

    <Content>
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </Content>
  </StyledArticle>
)
