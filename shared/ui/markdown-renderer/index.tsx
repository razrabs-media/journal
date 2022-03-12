import { FC } from 'react'
import ReactMarkdown, { Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkGemoji from 'remark-gemoji'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import a11yEmoji from './remark-emoji'

//TODO: HTML-Support
// 'react-markdown' умеет в HTML через плагин rehypeRaw, однако он чёт не хочет работать

const COMPONENTS: Components = {
  code: ({ inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        PreTag='div'
        language={match[1]}
        style={tomorrow}
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
}

const PLUGINS = [remarkGfm, remarkGemoji, a11yEmoji]

type MarkdownRendererProps = {
  children: string
}
export const MarkdownRenderer: FC<MarkdownRendererProps> = ({ children }) => (
  <ReactMarkdown components={COMPONENTS} remarkPlugins={PLUGINS}>
    {children}
  </ReactMarkdown>
)

export { MARKDOWN_MOCK } from './__mocks__'
