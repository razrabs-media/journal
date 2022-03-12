import styled from '@emotion/styled'

interface ComponentProps {
    color: string
}

export const Circle = styled.div<ComponentProps>`
    width: 11px;
    height: 11px;
    background: ${(props) => props.color};
    border-radius: 50%;
    margin-top: 1px;
`
