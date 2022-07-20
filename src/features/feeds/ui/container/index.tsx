import styled from '@emotion/styled'

export const FeedContainer = styled.div<{ small?: boolean }>`
  display: flex;
  flex-direction: column;

  margin: auto;
  max-width: 1025px;

  & > * {
    margin-bottom: ${({ small }) => (small ? '10px' : '32px')};

    &:last-child {
      margin-bottom: 0;
    }
  }
`
