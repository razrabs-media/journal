import styled from '@emotion/styled'
import { VFC } from 'react'
import { MarkdownRenderer } from 'shared/ui'
import { ShareButton } from 'shared/ui/share-button'

const Preview = styled.div`
  padding-top: 5px;
  display: flex;
  justify-content: end;
  align-items: center;
`

const ShareBlock = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`

const onEventShareButton = () => {
  if (navigator.share) {
    navigator.share({ url: `${window.location.href}` })
  }
}

const StyledArticle = styled.article``

const Header = styled.header<{ minHeight?: number }>`
  // Вычитаем 1, чтобы скомпенсировать границу снизу
  min-height: ${({ minHeight }) => (minHeight ? `${minHeight - 1}px` : 'auto')};

  border-bottom: 1px solid ${({ theme }) => theme.colors.text.primary};
`

const Title = styled.h1`
  margin: 0;

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

    <Preview>
      <ShareBlock>
        <ShareButton social='twitter' onClick={() => console.log('test2')} />
        <ShareButton social='url' onClick={onEventShareButton} />
      </ShareBlock>
    </Preview>

    <Content>
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </Content>
  </StyledArticle>
)
