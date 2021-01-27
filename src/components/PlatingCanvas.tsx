import React from 'react'
import styled from 'styled-components'
import { media } from '../components/Breakpoints'
import { colors } from '../components/theme'

// Components
import IndicatorIcon from './IndicatorIcon'

const PlatingCanvas: React.FC<any> = ({
    allowDrop,
    bowlVisible,
    cupVisible,
    drop,
}) => {
    return (
        <StyledPlatingCanvasContainer>
            <StyledPlatingCanvas />
            <StyledPhoto />
            <StyledPlate />
            <StyledPlatePlacementContainer>
                <StyledPlacement1 onDrop={drop} onDragOver={allowDrop} />
                <StyledPlacement2 onDrop={drop} onDragOver={allowDrop} />
                <StyledPlacement3 onDrop={drop} onDragOver={allowDrop} />
            </StyledPlatePlacementContainer>
            {cupVisible && <StyledCup />}
            <StyledPlacement4 id='placement-cup' onDrop={drop} onDragOver={allowDrop} />
            {bowlVisible && <StyledBowl />}
            <StyledPlacement5 id='placement-bowl' onDrop={drop} onDragOver={allowDrop} />
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

    ${media.xl`
        margin-left: 25rem;
    `}
`

const StyledCup = styled.div`
    background-image: url('./static/drink-outline.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    margin-top: 5rem;

    ${media.xl`
        margin-left: 25rem;
    `}
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

const StyledPlatePlacementContainer = styled.div`
    display: grid;
    grid-column: 2 / 4;
    grid-row: 1 / -1;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    z-index: 2;
`

const StyledPlacement1 = styled.div`
    align-self: center;
    display: flex;
    grid-column: 1 / 2;
    grid-row: 1 / -1;
    height: 26rem;
    justify-self: flex-end;
    width: 26rem;

    ${media.xl`
        height: 34rem;
        width: 34rem;
    `}
`

const StyledPlacement2 = styled.div`
    align-self: flex-end;
    display: flex;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    height: 18rem;
    justify-self: flex-start;
    margin: 2rem;
    width: 18rem;

    ${media.xl`
        margin: 1rem;
        height: 28rem;
        width: 28rem;
    `}
`

const StyledPlacement3 = styled.div`
    align-self: flex-start;
    display: flex;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    height: 18rem;
    justify-self: flex-start;
    margin: 2rem;
    width: 18rem;

    ${media.xl`
        margin: 1rem;
        height: 28rem;
        width: 28rem;
    `}
`

const StyledPlacement4 = styled.div`
    align-self: center;
    display: flex;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    height: 25rem;
    justify-self: center;
    margin-top: 5rem;
    width: 25rem;
    z-index: 2;

    ${media.xl`
        margin-left: 25rem;
        height: 35rem;
        width: 35rem;
    `}
`

const StyledPlacement5 = styled.div`
    align-self: center;
    display: flex;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    height: 20rem;
    justify-self: center;
    margin-top: 5rem;
    width: 20rem;
    z-index: 2;

    ${media.xl`
        margin-left: 25rem;
        height: 28rem;
        width: 28rem;
    `}
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
