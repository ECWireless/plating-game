import styled from 'styled-components'
import { colors, shadows } from './theme'

export const SelectionButton = () => {
    return (
        <SelectionButtonContainer>
            <StyledButton>
                <option value="breakfast">Breakfast</option>
                <option value="linner">Lunch / Dinner</option>
            </StyledButton>
            <StyledLine />
            <StyledSvg id="selection-svg" viewBox="0 0 29 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L15.125 16L27 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </StyledSvg>
        </SelectionButtonContainer>
    )
}

const SelectionButtonContainer = styled.div`
    position: relative;
    height: 8rem;
    width: 30rem;

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
    font-size: 2rem;
    outline: none;
    padding: 2rem;
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

const StyledLine = styled.div`
    background: ${colors.white};
    height: 4rem;
    position: absolute;
    right: 8rem;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
`

const StyledSvg = styled.svg`
    height: 1.8rem; 
    position: absolute;
    right: 3rem;
    top: 3.2rem;
    transition: all .3s ease;
    width: 2.9rem;
`