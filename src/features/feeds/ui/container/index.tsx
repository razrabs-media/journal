import styled from '@emotion/styled'

export const FeedContainer = styled.div<{ small?: boolean }>`
  display: flex;
  flex-direction: column;

  margin: auto;
  max-width: 1025px;

  gap: ${({ small }) => (small ? '10px' : '32px')};
`
