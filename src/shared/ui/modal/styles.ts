// noinspection CssInvalidPropertyValue

import styled from '@emotion/styled'

export const Background = styled.div<{ hide: boolean }>`
  position: fixed;
  width: 100vw;
  opacity:  ${({ hide }) => `${hide ? '0' : '1'}`};;
  min-height: 100vh;
  /* mobile fix */
  min-height: -moz-available;
  min-height: -webkit-fill-available;
  min-height: fill-available;
  /* ---------- */
  background-color: #00000040;
  top: 0;
  left: 0;
  display: grid;
  visibility: ${({ hide }) => (hide ? 'hidden' : 'visible')};
  grid-template:
    '. body' 1fr
    / auto minmax(auto, 525px);
  transition: 0.2s ease-out;
}`

export const Box = styled.div`
  grid-area: body;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const Body = styled.div`
  height: 100%;
  margin: 22px 24px 48px 24px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
`
