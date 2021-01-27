import styled from 'styled-components'
import { colors, shadows } from './theme'

export const RemoveButton = styled.button`
    align-self: center;
    background: ${colors.red};
    border: 2px solid ${colors.red};
    border-radius: 36px;
    box-shadow: ${shadows.button};
    color: ${colors.white};
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    outline: none;
    text-transform: uppercase;
    transition: all .3s ease;
    height: 3rem;
    width: 15rem;

    &:hover {
        border: 2px solid ${colors.white};
        box-shadow: ${shadows.buttonHover};
        cursor: pointer;
    }

    &:active {
        box-shadow: none;
    }
`