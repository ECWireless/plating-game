import styled from 'styled-components'
import { colors, shadows } from '../theme'

export const ResetPlayButton = styled.button`
    background: ${colors.green};
    border: 2px solid ${colors.green};
    border-radius: 36px;
    box-shadow: ${shadows.button};
    color: ${colors.white};
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    outline: none;
    text-transform: uppercase;
    transition: all .3s ease;
    height: 8rem;
    width: 30rem;

    &:hover {
        border: 2px solid ${colors.white};
        box-shadow: ${shadows.buttonHover};
        cursor: pointer;
    }

    &:active {
        box-shadow: none;
    }
`