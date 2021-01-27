import styled, { css } from 'styled-components'
import { media } from './Breakpoints'

interface IContainers {
    align?: string;
    direction?: string;
    height?: string;
    justify?: string;
    respond?: string;
    respondDirection?: string;
    respondFlip?: string;
    wrap?: string;
}

export const Container = styled.div<IContainers>`
    position: relative;
    width: 300px;
    margin: auto;

    ${media.xs`
        width: 400px;
    `}
    
    ${media.sm`
        width: 600px;
    `}

    ${media.md`
        width: 800px;
    `}

    ${media.lg`
        width: 1200px;
    `}

    ${media.xl`
        width: 1800px;
    `}
`

export const Col2 = styled.div<IContainers>`
    ${props => css`
        display: flex;
        flex-direction: ${props.respondDirection ? props.respondDirection : 'column'};

        ${media.xs`
        `}
        
        ${media.sm`
        `}

        ${media.md`
        `}

        ${media.lg`
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
        `}
    `}
`

export const Col2Left = styled.div<IContainers>`
    ${props => css`
        display: flex;
        flex-direction: column;
        align-items: ${props.align};
        justify-content: ${props.justify};

        ${media.xs`
        `}
        
        ${media.sm`
        `}

        ${media.md`
            grid-column: 1 / 2;
        `}

        ${media.lg`
        `}
    `}
`

export const Col2Right = styled.div<IContainers>`
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;

    ${props => css`
        align-items: ${props.align};
        justify-content: ${props.justify};
    `}
`

export const Col3 = styled.div<IContainers>`
    ${props => css`
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 1fr 1fr 1fr;

        ${media.xs`
        `}
        
        ${media.sm`
        `}

        ${media.md`
        `}

        ${media.lg`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto;
        `}
    `}
`

export const Col3Left = styled.div<IContainers>`
    ${props => css`
        display: flex;
        flex-direction: column;
        align-items: ${props.align};
        justify-content: ${props.justify};

        ${media.xs`
        `}
        
        ${media.sm`
        `}

        ${media.md`
            grid-column: 1 / 2;
        `}

        ${media.lg`
        `}
    `}
`

export const Col3Middle = styled.div<IContainers>`
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;

    ${props => css`
        align-items: ${props.align};
        justify-content: ${props.justify};
    `}
`

export const Col3Right = styled.div<IContainers>`
    grid-column: 3 / 4;
    display: flex;
    flex-direction: column;

    ${props => css`
        align-items: ${props.align};
        justify-content: ${props.justify};
    `}
`

export const Flex = styled.div<IContainers>`
    display: flex;

    ${props => css`
        justify-content: ${props.justify};
        align-items: ${props.align};
        flex-wrap: ${props.wrap};
        flex-direction: ${props.direction};
        height: ${props.height};
    `}

    ${props => props.respond && css`
        flex-direction: column;

        ${media.lg`
            flex-direction: row;
        `}
    `}

    ${props => props.respondFlip && css`
        flex-direction: column-reverse;

        ${media.lg`
            flex-direction: row;
        `}
    `}

    ${props => props.wrap && css`
        flex-wrap: wrap;

        ${media.xs`
            justify-content: center;
        `}

        ${media.sm`
            justify-content: space-around;
        `}
    `}
`
