/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { FC } from 'react'
import ReactMarkdown, { Components } from 'react-markdown'
import ReactPlayer from 'react-player/lazy'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import remarkGemoji from 'remark-gemoji'
import remarkGfm from 'remark-gfm'
import { CopyButton, Image, Typography } from 'shared/ui'
import { ThemeName } from 'shared/ui/theme'
import { MediaScreen } from 'shared/ui/theme/responsive'
import a11yEmoji from './remark-emoji'
import { codeTheme } from './theme'

// https://github.com/remarkjs/remark-gfm/issues/57

const MATCH_URL_YOUTUBE =
  /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//

const CodeWrapper = styled.div`
  position: relative;
  // TODO: в базовом гриде *fr'ы, что не могут ограничить ширину, в будущем не помешает избавиться
  max-width: calc(100vw - 48px);

  ${MediaScreen.mobile} {
    max-width: calc(100vw - 20px);
  }
`

const Remark = styled.blockquote`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  margin: 8px 0;
  padding: 24px 28px;
  position: relative;

  p {
    margin: 0;
    display: inline;
    font-size: 16px;
    font-family: JetBrainsMono, 'Helvetica', 'Arial', sans-serif;
    letter-spacing: initial;
    line-height: initial;
  }
`

const handleCopyButton = async (code: string) => {
  await navigator.clipboard.writeText(code)
}

const COMPONENTS = (themeName: ThemeName): Components => ({
  p: ({ node, ...props }) => (
    <Typography
      {...props}
      as='div'
      className='paragraph'
      color='primary'
      lineHeight='140%'
      size='lg'
    />
  ),
  h1: ({ node, ...props }) => (
    <Typography
      {...props}
      uppercase
      as='h2'
      color='primary'
      size='xl'
      weight='medium'
    />
  ),
  h2: ({ node, ...props }) => (
    <Typography
      {...props}
      uppercase
      as='h2'
      color='primary'
      size='xl'
      weight='medium'
    />
  ),
  h3: ({ node, ...props }) => (
    <Typography
      {...props}
      uppercase
      as='h2'
      color='primary'
      size='xl'
      weight='medium'
    />
  ),
  h4: ({ node, ...props }) => (
    <Typography
      {...props}
      uppercase
      as='h2'
      color='primary'
      size='xl'
      weight='medium'
    />
  ),
  h5: ({ node, ...props }) => (
    <Typography
      {...props}
      uppercase
      as='h2'
      color='primary'
      size='xl'
      weight='medium'
    />
  ),
  h6: ({ node, ...props }) => (
    <Typography
      {...props}
      uppercase
      as='h2'
      color='primary'
      size='xl'
      weight='medium'
    />
  ),
  img: ({ node, ...props }) => (
    <Image
      alt='article image'
      {...props}
      as='span'
      fit='contain'
      loadingSize='sm'
    />
  ),
  blockquote: ({ node, ...props }) => <Remark {...props} />,
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
              fontSize: 14,
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
  font-size: 20px;
  line-height: 140%;

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
    padding-left: 20px;
  }

  ol {
    padding-left: 22px;
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
