import styled from '@emotion/styled'
import Typography from '@razrabs-ui/typography'
import { FC } from 'react'
import ReactMarkdown, { Components } from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGemoji from 'remark-gemoji'
import remarkGfm from 'remark-gfm'
import { CopyButton } from 'shared/ui'
import a11yEmoji from './remark-emoji'

const CodeWrapper = styled.div`
  position: relative;
`

const handleCopyButton = async (code: string) => {
  await navigator.clipboard.writeText(code)
}

const COMPONENTS: Components = {
  p: (props) => (
    <Typography {...props} color='primary' lineHeight='140%' size='lg' />
  ),
  h1: (props) => (
    <Typography
      {...props}
      uppercase
      as='h2'
      color='primary'
      size='xl'
      weight='medium'
    />
  ),
  h2: (props) => (
    <Typography
      {...props}
      uppercase
      as='h2'
      color='primary'
      size='xl'
      weight='medium'
    />
  ),
  h3: (props) => (
    <Typography
      {...props}
      uppercase
      as='h2'
      color='primary'
      size='xl'
      weight='medium'
    />
  ),
  h4: (props) => (
    <Typography
      {...props}
      uppercase
      as='h2'
      color='primary'
      size='xl'
      weight='medium'
    />
  ),
  h5: (props) => (
    <Typography
      {...props}
      uppercase
      as='h2'
      color='primary'
      size='xl'
      weight='medium'
    />
  ),
  h6: (props) => (
    <Typography
      {...props}
      uppercase
      as='h2'
      color='primary'
      size='xl'
      weight='medium'
    />
  ),
  code: ({ inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '')
    const codeString = String(children).replace(/\n$/, '')
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
          language={match[1]}
          style={tomorrow}
          {...props}
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
}

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

  code {
    font-family: 'JetBrainsMono';
    font-size: 14px;
    word-break: break-word;
    white-space: pre-line;
    background: rgb(45, 45, 45);
    padding: 0.2em 0.4em;
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
}) => (
  <StyleWrapper className={className}>
    <ReactMarkdown components={COMPONENTS} remarkPlugins={PLUGINS}>
      {children}
    </ReactMarkdown>
  </StyleWrapper>
)
