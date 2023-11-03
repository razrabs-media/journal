/* eslint-disable @typescript-eslint/no-unused-vars */

import { useTheme } from '@emotion/react'
import { FC } from 'react'
import { Components } from 'react-markdown'
import ReactPlayer from 'react-player/lazy'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import remarkGemoji from 'remark-gemoji'
import remarkGfm from 'remark-gfm'
import { CopyButton, Image } from 'shared/ui'
import { ThemeName } from 'shared/ui/theme'
import a11yEmoji from './remark-emoji'
import { StyledReactMarkdown } from './styled'
import { codeTheme } from './theme'

// https://github.com/remarkjs/remark-gfm/issues/57

const MATCH_URL_YOUTUBE =
  /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//

const handleCopyButton = async (code: string) => {
  await navigator.clipboard.writeText(code)
}

const getComponents = (themeName: ThemeName): Components => ({
  img: ({ node, ...props }) => (
    <Image
      alt='article image'
      {...props}
      as='span'
      fit='contain'
      loadingSize='sm'
    />
  ),
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
      <>
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
      </>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
})

const PLUGINS = [remarkGfm, remarkGemoji, a11yEmoji]

type MarkdownRendererProps = {
  children: string
  className?: string
}

export const MarkdownRenderer: FC<MarkdownRendererProps> = ({
  children,
  className,
}) => {
  const { name } = useTheme()
  const components = getComponents(name)

  return (
    <StyledReactMarkdown
      className={className}
      components={components}
      remarkPlugins={PLUGINS}
    >
      {children}
    </StyledReactMarkdown>
  )
}
