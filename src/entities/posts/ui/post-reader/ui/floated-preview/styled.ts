import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import Typography from '@razrabs-ui/typography'

export const Layout = styled.div`
  position: fixed;

  pointer-events: none;

  display: grid;

  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  grid-template-rows: auto;
  grid-gap: 24px;

  // Учитываем гэпы корневого лэйаута
  width: calc(100% - 48px);

  @media screen and (max-width: 999px) {
    //TODO Мобильное отображение
    display: none;
  }

  @media screen and (max-width: 671px) {
    // Учитываем гэпы корневого лэйаута
    width: calc(100% - 20px);
  }
`

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.3;
  }
`

const fadeOutAnimation = keyframes`
  from{
    opacity: 0.3;
  }
  to {
    opacity: 0;
  }
`

export const StyledFloatedBlock = styled.div<{
  shouldDisplay: boolean
  fadeIn: boolean
  fadeOut: boolean
  transitionTime: number
}>`
  display: ${({ shouldDisplay }) => (shouldDisplay ? 'flex' : 'none')};

  pointer-events: all;

  flex-direction: column;
  max-width: 450px;

  ${({ fadeIn, fadeOut, transitionTime }) =>
    fadeIn
      ? css`
          animation: ${fadeInAnimation} ${transitionTime}ms ease-in;
        `
      : fadeOut
      ? css`
          animation: ${fadeOutAnimation} ${transitionTime}ms ease-out;
        `
      : null}

  opacity: 0.3;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 1319px) {
    max-width: initial;
  }
`

export const Title = styled(Typography)`
  margin-top: 10px;
`

export const DateAndShareRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`

export const PublicationDate = styled(Typography)``

export const ShareBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 15px;
`

export const Line = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.logo};
`

export const TagsBlock = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
`
