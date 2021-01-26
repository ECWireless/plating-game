import React from 'react'
import styled from 'styled-components'
import { media } from './Breakpoints'
import { colors, shadows } from './theme'

const IndicatorIcon: React.FC = () => {
    return (
        <StyledIndicatorContainer>
            <StyledSvg viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.9375 7.25L21.75 34.4375L9.0625 21.75L0 30.8125L21.75 52.5625L58 16.3125L48.9375 7.25Z" fill="#34A548"/>
            </StyledSvg>

        </StyledIndicatorContainer>
    )
}

export default IndicatorIcon

const StyledIndicatorContainer = styled.div`
    align-items: center;
    background: ${colors.white};
    border: 2px solid ${colors.white};
    border-radius: 50%;
    box-shadow: ${shadows.button};
    display: flex;
    height: 7.5rem;
    justify-content: center;
    transition: all .3s ease;
    width: 7.5rem;
    z-index: 99;

    &:hover {
        border: 2px solid ${colors.green};
        cursor: pointer;
    }
`

const StyledSvg = styled.svg`
    height: 5rem;
    width: 5rem;
`
