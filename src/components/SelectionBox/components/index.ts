import styled from 'styled-components'
import { colors, shadows } from '../../../components/theme'

export const StyledLabelContainer = styled.div`
    position: absolute;
    bottom: -3rem;
    opacity: 0;
    transition: all .3s ease;
    text-align: center;
`

export const StyledSelectionBox = styled.div`
    align-items: center;
    justify-content: center;
    border: 2px solid ${colors.blue};
    display: flex;
    flex-wrap: wrap;
	grid-column: 1 / 3;
    grid-row: 2 / 3;
    overflow: scroll;
    padding: 4rem 4rem 6rem;
`

export const StyledItemContainer = styled.div`;
    align-items: center;
    border: 2px solid ${colors.white};
    border-radius: 50%;
    box-shadow: ${shadows.button};
    display: flex;
    justify-content: center;
    height: 12rem;
    position: relative;
    width: 12rem;
    margin: 0 3rem 5rem;
    transition: all .3s ease;

    &:hover {
        border: 2px solid ${colors.blue};
        box-shadow: ${shadows.buttonHover};
        cursor: grab;

        #item-text {
            opacity: 1;
            transform: translateY(2rem);
            width: 30rem;
        }
    }

    &:active {
        box-shadow: none;
        cursor: grabbing;
    }
`

export const StyledItemContainerInactive = styled.div`
    align-items: center;
    background: #EAEAEA;
    border: 2px solid #EAEAEA;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    height: 12rem;
    width: 12rem;
    margin: 0 3rem 5rem;
`

export const StyledPhotoContainer = styled.div`
    height: 7rem;
    width: 7rem;

    &:hover {
        #item-text {
            color: red;
        }
    }
`

export const StyledItemPhoto = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;

    &:hover {
        #item-text {
            color: red;
        }
    }
`

export const StyledItemPhotoInactive = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    opacity: .5;
    width: 100%;
`
