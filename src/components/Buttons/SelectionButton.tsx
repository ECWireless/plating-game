import React from 'react'
import styled from 'styled-components'
import { media } from '../Breakpoints'
import { colors, shadows } from '../theme'

export const SelectionButton: React.FC<any> = ({
    mealSelection,
    setMealSelection,
}) => {
    return (
        <SelectionButtonContainer>
            <StyledButton value={mealSelection} onChange={(e) => setMealSelection(e.target.value)}>
                <option value="breakfast">Breakfast</option>
                <option value="linner">Lunch / Dinner</option>
            </StyledButton>
            <StyledLine />
            <StyledSvg id="selection-svg" viewBox="0 0 29 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L15.125 16L27 2" stroke="white" strokeWidth={'3'} strokeLinecap={'round'} strokeLinejoin={'round'} />
            </StyledSvg>
        </SelectionButtonContainer>
    )
}

const SelectionButtonContainer = styled.div`
    position: relative;
    height: 6rem;
    width: 20rem;

    ${media.lg`
        height: 8rem;
        width: 26rem;
    `}

    ${media.xl`
        height: 8rem;
        width: 30rem;
    `}

    &:hover {
        #selection-svg {
            transform: rotate(-90deg);
            cursor: pointer;
        }
    }
`

const StyledButton = styled.select`
    align-self: center;
    appearance: none;
    background: ${colors.blue};
    border: 2px solid ${colors.blue};
    border-radius: 36px;
    box-shadow: ${shadows.button};
    color: ${colors.white};
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    outline: none;
    padding: 1rem 2rem;
    text-transform: uppercase;
    transition: all .3s ease;
    height: 6rem;
    width: 20rem;

    ${media.lg`
        font-size: 1.8rem;
        height: 8rem;
        width: 26rem;
        padding: 2rem;
    `}

    ${media.xl`
        font-size: 2rem;
        height: 8rem;
        width: 30rem;
    `}

    &:hover {
        border: 2px solid ${colors.white};
        box-shadow: ${shadows.buttonHover};
        cursor: pointer;
    }

    &:active {
        box-shadow: none;
    }
`

const StyledLine = styled.div`
    background: ${colors.white};
    height: 2.5rem;
    position: absolute;
    right: 6rem;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;

    ${media.lg`
        right: 8rem;
        height: 4rem;
        width: 3px;
    `}
`

const StyledSvg = styled.svg`
    height: 1.2rem; 
    position: absolute;
    right: 3rem;
    top: 2.5rem;
    transition: all .3s ease;
    width: 1.8rem;

    ${media.lg`
        height: 1.8rem; 
        top: 3.2rem;
        width: 2.9rem;
        width: 2.3rem;
    `}
`