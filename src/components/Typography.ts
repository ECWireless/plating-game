import styled, { css } from 'styled-components'
import { colors } from './theme'

interface ITypography {
    bold?: string;
}

export const H1 = styled.h1<ITypography>`
    color: ${colors.green};
    font-size: 2.8rem;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    
    ${props => props.bold === 'true' && css`
        font-weight: bold;
    `}
`

export const H2 = styled.h2<ITypography>`
    color: ${colors.black};
    font-size: 2.4rem;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;

    ${props => props.bold === 'true' && css`
        font-weight: bold;
    `}
`

export const P1 = styled.p`
    font-size: 1.8rem;
    line-height: 22px;

    ${props => props.color && css`
        color: ${props.color};
    `}
`