import styled from '@emotion/styled'

interface ComponentProps {
    color: string
}

export const WrapperFooter = styled.div<ComponentProps>`
    border-top: 1px solid ${(props) => props.color};
`
export const Copyleft = styled.div`
    height: 24px;
    width: 140px;
    text-align: left;
    margin-top: 20px;
`

export const FontSize = '18vw'

export const SiteTitle = styled.div`
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: ${FontSize};
    text-transform: uppercase;
    font-weight: bold;
    font-family: Styrene B LC, serif;
    opacity: 5%;
    overflow: hidden;
    height: calc(${FontSize} - 5vw);
    &:before {
        content: '';
        display: block;
        height: 0;
        width: 0;
        margin-top: -9vh;
    }
`
