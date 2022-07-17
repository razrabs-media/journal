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
  p: (props) => <Typography {...props} color='primary' size='lg' />,
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
  max-width: 1027px;

  a {
    color: ${({ theme }) => theme.colors.brand};

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 24px 0;
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
