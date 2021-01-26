import React from 'react'
import styled from 'styled-components'
import { colors } from '../components/theme'

// Components
import IndicatorIcon from './IndicatorIcon'

const PlatingCanvas: React.FC = () => {
    return (
        <StyledPlatingCanvasContainer>
            <StyledPlatingCanvas />
            <StyledPhoto />
            <StyledPlate />
            <StyledCup />
            <StyledBowl />
            <StyledIndicatorPosition>
                <IndicatorIcon />
            </StyledIndicatorPosition>
        </StyledPlatingCanvasContainer>
    )
}

export default PlatingCanvas

const StyledBowl = styled.div`
    background-image: url('./static/fruit-cookie-outline.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    transform: scale(.6);
`

const StyledCup = styled.div`
    background-image: url('./static/drink-outline.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    margin-top: 5rem;
`

const StyledIndicatorPosition = styled.div`
    bottom: 2rem;
    right: 2rem;
    position: absolute;
    z-index: 99;
`

const StyledPhoto = styled.div`
    background-image: url('./static/wood-texture_edited.png');
    background-position: center;
    background-size: cover;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    height: 100%;
    width: 100%;
    z-index: 0;
`

const StyledPlate = styled.div`
    background-image: url('./static/plate.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    grid-column: 2 / 4;
    grid-row: 1 / -1;
    transform: scale(.95);
    z-index: 2;
`

const StyledPlatingCanvas = styled.div`
    background: #642E03;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    height: 100%;
    width: 100%;
`

const StyledPlatingCanvasContainer = styled.div`
    border: 2px solid ${colors.blue};
    display: grid;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
	grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    position: relative;
`
