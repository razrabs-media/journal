import styled from '@emotion/styled'
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
  a {
    color: ${({ theme }) => theme.colors.accent};

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-height: 600px;
    max-width: 100%;
  }
`

type MarkdownRendererProps = {
  children: string
}
export const MarkdownRenderer: FC<MarkdownRendererProps> = ({ children }) => (
  <StyleWrapper>
    <ReactMarkdown components={COMPONENTS} remarkPlugins={PLUGINS}>
      {children}
    </ReactMarkdown>
  </StyleWrapper>
)
