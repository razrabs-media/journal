import styled from '@emotion/styled'

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 10px !important;

    &:last-child {
      margin-bottom: 0;
    }
  }
`
