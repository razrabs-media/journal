import styled from '@emotion/styled'
import { Dispatch, SetStateAction, useEffect, useRef, VFC } from 'react'
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
  setShouldShowFloated: Dispatch<SetStateAction<boolean>>
  headerMinHeight?: number
}

export const PostArticle: VFC<PostArticleProps> = ({
  title,
  description,
  content,
  headerMinHeight,
  setShouldShowFloated,
}) => {
  const headRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldShowFloated(!entry.isIntersecting)
      },
      {
        threshold: 0,
      },
    )

    const currentTarget = headRef.current
    if (currentTarget) observer.observe(currentTarget)

    return () => {
      if (currentTarget) observer.unobserve(currentTarget)
    }
  }, [headRef, setShouldShowFloated])

  return (
    <StyledArticle>
      <Header minHeight={headerMinHeight} ref={headRef}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Header>

      <TagsAndShare>
        <TagsBlock />

        <ShareBlock>
          <ShareButton aria-label='Twitter' social='twitter' />
          <ShareButton aria-label='Share url' social='url' />
        </ShareBlock>
      </TagsAndShare>

      <Content>
        <MarkdownRenderer>{content}</MarkdownRenderer>
      </Content>
    </StyledArticle>
  )
}
