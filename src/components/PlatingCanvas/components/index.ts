import styled from 'styled-components'
import { media } from '../../../components/Breakpoints'
import { colors } from '../../../components/theme'

export const StyledBowl = styled.div`
    background-image: url('/static/fruit-cookie-outline.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    transform: scale(.6);

    ${media.xl`
        transform: scale(.5);
    `}
`

export const StyledCup = styled.div`
    background-image: url('/static/drink-outline.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    margin-top: 5rem;

    ${media.xl`
        transform: scale(.8);
    `}
`

export const StyledIndicatorPosition = styled.div`
    bottom: 2rem;
    right: 2rem;
    position: absolute;
    z-index: 99;
`

export const StyledPhoto = styled.div`
    background-image: url('/static/wood-texture_edited.png');
    background-position: center;
    background-size: cover;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    height: 100%;
    width: 100%;
    z-index: 0;
`

export const StyledPlatePlacementContainer = styled.div`
    display: grid;
    grid-column: 2 / 3;
    grid-row: 1 / -1;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    z-index: 2;
`

export const StyledPlacement1 = styled.div`
    align-self: center;
    display: flex;
    grid-column: 1 / 2;
    grid-row: 1 / -1;
    height: 25rem;
    justify-self: flex-end;
    margin-right: -3rem;
    width: 25rem;

    ${media.lg`
        margin-right: -4rem;
        height: 32rem;
        width: 32rem;
    `}

    ${media.xl`
        margin-right: -4rem;
        height: 40rem;
        width: 40rem;
    `}
`

export const StyledPlacement2 = styled.div`
    align-self: flex-end;
    display: flex;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    height: 13rem;
    justify-self: flex-start;
    margin: 2rem;
    width: 13rem;

    ${media.lg`
        margin: 2rem;
        height: 18rem;
        width: 18rem;
    `}

    ${media.xl`
        margin-left: -2rem;
        margin-bottom: -1rem;
        height: 23rem;
        width: 23rem;
    `}
`

export const StyledPlacement3 = styled.div`
    align-self: flex-start;
    display: flex;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    height: 13rem;
    justify-self: flex-start;
    margin: 2rem;
    width: 13rem;

    ${media.lg`
        height: 18rem;
        margin: 2rem;
        width: 18rem;
    `}

    ${media.xl`
        margin-left: -2rem;
        margin-top: -1rem;
        height: 23rem;
        width: 23rem;
    `}
`

export const StyledPlacement4 = styled.div`
    align-self: center;
    display: flex;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    height: 14rem;
    justify-self: center;
    margin-top: 5rem;
    width: 14rem;
    z-index: 2;

    ${media.lg`
        height: 25rem;
        margin-top: 5rem;
        width: 25rem;
    `}

    ${media.xl`
        height: 30rem;
        width: 30rem;
    `}
`

export const StyledPlacement5 = styled.div`
    align-self: center;
    display: flex;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    height: 13rem;
    justify-self: center;
    margin-top: 5rem;
    width: 13rem;
    z-index: 2;

    ${media.lg`
        height: 20rem;
        margin-top: 5rem;
        width: 20rem;
    `}

    ${media.xl`
        height: 20rem;
        width: 20rem;
    `}
`

export const StyledPlate = styled.div`
    background-image: url('/static/plate.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    grid-column: 2 / 4;
    grid-row: 1 / -1;
    transform: scale(.95);
    z-index: 2;
`

export const StyledPlatingCanvas = styled.div`
    background: #642E03;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    height: 100%;
    width: 100%;
`

export const StyledPlatingCanvasContainer = styled.div`
    border-bottom: 2px solid ${colors.blue};
    display: grid;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
	grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    overflow: hidden;
    position: relative;
`

export const StyledItemPhoto = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
`
