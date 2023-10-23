/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { FC } from 'react'
import ReactMarkdown, { Components } from 'react-markdown'
import ReactPlayer from 'react-player/lazy'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import remarkGemoji from 'remark-gemoji'
import remarkGfm from 'remark-gfm'
import { CopyButton, Image } from 'shared/ui'
import { ThemeName } from 'shared/ui/theme'
import { MediaScreen } from 'shared/ui/theme/responsive'
import { UnstableTypography as Typography } from 'shared/ui/typography'
import a11yEmoji from './remark-emoji'
import { codeTheme } from './theme'

// https://github.com/remarkjs/remark-gfm/issues/57

const MATCH_URL_YOUTUBE =
  /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//

const CodeWrapper = styled.div`
  /* position: relative;
  // TODO: в базовом гриде *fr'ы, что не могут ограничить ширину, в будущем не помешает избавиться
  max-width: calc(100vw - 48px);

  ${MediaScreen.mobile} {
    max-width: calc(100vw - 20px);
  } */
`

const GeneralH = ({ node, ...props }: any) => (
  <Typography
    {...props}
    uppercase
    as='h2'
    color='primary'
    sx={{ typography: { xs: 'h3', md: 'h2' } }}
  />
)

const Blockquote = styled.blockquote`
  margin: 20px 0;
  position: relative;
  border-left: 1px solid;
  padding-left: 1rem;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.secondary};

  & :last-child {
    margin: 0;
  }

  p,
  .paragraph {
    margin: 0;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.blockquote};
    ${MediaScreen.mobile} {
      font-size: 18px;
    }
  }
`

const handleCopyButton = async (code: string) => {
  await navigator.clipboard.writeText(code)
}

const COMPONENTS = (themeName: ThemeName): Components => ({
  p: ({ node, ...props }) => (
    <Typography
      {...props}
      className='paragraph'
      color='primary'
      lineHeight='140%'
      sx={{ typography: { xs: 'body1', md: 'subtitle1' } }}
      weight='normal'
    />
  ),
  h1: GeneralH,
  h2: GeneralH,
  h3: GeneralH,
  h4: GeneralH,
  h5: GeneralH,
  h6: GeneralH,
  img: ({ node, ...props }) => (
    <Image
      alt='article image'
      {...props}
      as='span'
      fit='contain'
      loadingSize='sm'
    />
  ),
  blockquote: ({ node, ...props }) => <Blockquote {...props} />,
  a: ({ node, ...props }) => {
    const propsWithoutNode = { ...props, node: undefined }
    if (props.children[0] === 'oembed') {
      if (MATCH_URL_YOUTUBE.test(props.href || ''))
        return <ReactPlayer controls light pip url={props.href} width='auto' />
    }
    return (
      <a
        {...propsWithoutNode}
        rel='noopener noreferrer nofollow'
        target='_blank'
      />
    )
  },
  code: ({ inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '')
    const codeString = String(children).replace(/\n$/, '')
    const propsWithoutNode = { ...props, node: undefined }
    return !inline && match ? (
      <CodeWrapper>
        <SyntaxHighlighter
          PreTag='div'
          codeTagProps={{
            style: {
              fontFamily: 'JetBrainsMono',
              fontSize: 16,
            },
          }}
          data-lang={match[1]}
          language={match[1]}
          style={codeTheme(themeName) as any}
          {...propsWithoutNode}
        >
          {codeString}
        </SyntaxHighlighter>
        <CopyButton onClick={() => handleCopyButton(codeString)} />
      </CodeWrapper>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
})

const PLUGINS = [remarkGfm, remarkGemoji, a11yEmoji]

const StyleWrapper = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;

  ${MediaScreen.mobile} {
    font-size: 20px;
  }

  a {
    color: ${({ theme }) => theme.colors.brand};

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 24px 0;
  }

  .paragraph {
    margin: 24px 0;
  }

  h2 {
    margin-top: 64px;
  }

  //TODO parse image to figcaption
  img {
    max-height: 600px;
    max-width: 100%;
    display: inline-block;
  }

  ul {
    padding-left: 1.8rem;
  }

  ol {
    padding-left: 1.8rem;
  }

  pre {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }

  code {
    word-break: break-word;
    white-space: pre-line;
    background: rgb(45, 45, 45);
    padding: 0.2em 0.4em;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius: 6px;
  }
`

type MarkdownRendererProps = {
  className?: string
  children: string
}
export const MarkdownRenderer: FC<MarkdownRendererProps> = ({
  children,
  className,
}) => {
  const theme = useTheme()
  return (
    <StyleWrapper className={className}>
      <ReactMarkdown
        components={COMPONENTS(theme.name)}
        remarkPlugins={PLUGINS}
      >
        {children}
      </ReactMarkdown>
    </StyleWrapper>
  )
}
