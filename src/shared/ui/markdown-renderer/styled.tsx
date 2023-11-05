import styled from '@emotion/styled'
import ReactMarkdown from 'react-markdown'
import { MediaScreen } from '../theme/responsive'

export const StyledReactMarkdown = styled(ReactMarkdown)`
  font-family: 'Inter', sans-serif;
  color: ${({ theme }) => theme.colors.text.regular};
  line-height: 30px;
  font-size: 20px;

  ${MediaScreen.mobile} {
    font-size: 16px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors.text.heading};
    margin: 0;
    margin-top: 64px;
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 120%;

    ${MediaScreen.mobile} {
      font-size: 24px;
      margin-top: 48px;
      margin-bottom: 24px;
      line-height: 120%;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.brand};

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    padding: 0;
    margin: 0;
    margin-bottom: 30px;

    ${MediaScreen.mobile} {
      margin-bottom: 24px;
    }

    img {
      margin-bottom: 0;
    }
  }

  img {
    margin-bottom: 30px;
    max-height: 600px;
    max-width: 100%;
    display: inline-block;
  }

  ul,
  ol {
    margin: 0;
    margin-bottom: 30px;

    ${MediaScreen.mobile} {
      margin-bottom: 24px;
    }

    li {
      p,
      img,
      code,
      pre {
        margin: 0;
      }
    }
  }

  hr {
    box-sizing: border-box;
    border-top: 1px solid ${({ theme }) => theme.colors.divider};
    margin-bottom: 30px;

    ${MediaScreen.mobile} {
      margin-bottom: 24px;
    }
  }

  blockquote {
    margin: 0;
    margin-bottom: 30px;
    border-left: 4px solid ${({ theme }) => theme.colors.divider};
    padding-left: 1rem;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.secondary};

    ${MediaScreen.mobile} {
      margin-bottom: 24px;
    }
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
    margin-bottom: 30px;

    ${MediaScreen.mobile} {
      margin-bottom: 24px;
    }
  }
`
