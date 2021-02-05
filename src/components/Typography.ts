import styled, { css } from 'styled-components'
import { media } from './Breakpoints'
import { colors } from './theme'

interface ITypography {
    bold?: string;
    color?: string;
}

export const H1 = styled.h1<ITypography>`
    font-size: 2.4rem;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    
    ${props => props.bold === 'true' && css`
        font-weight: bold;
    `}

    ${props => props.color && css`
        color: ${props.color};
    `}

    ${media.lg`
        font-size: 2.6rem;
    `}

    ${media.xl`
        font-size: 2.8rem;
    `}
`

export const H2 = styled.h2<ITypography>`
    color: ${colors.black};
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;

    ${props => props.bold === 'true' && css`
        font-weight: bold;
    `}

    ${media.lg`
        font-size: 2.2rem;
    `}

    ${media.xl`
        font-size: 2.4rem;
    `}
`

export const P1 = styled.p`
    font-size: 1.2rem;
    line-height: 14px;

    ${props => props.color && css`
        color: ${props.color};
    `}

    ${media.lg`
        font-size: 1.6rem;
        line-height: 20px;
    `}

    ${media.xl`
        font-size: 1.8rem;
        line-height: 22px;
    `}
`