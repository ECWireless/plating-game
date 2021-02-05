import styled, { css } from 'styled-components'
import { media } from '../../../components/Breakpoints'
import { colors, shadows } from '../../../components/theme'

export const FoodLabel = styled.p`
    font-size: 1.8rem;
    line-height: 14px;

    ${props => props.color && css`
        color: ${props.color};
    `}
`

export const StyledLabelContainer = styled.div`
    position: absolute;
    bottom: -3rem;
    opacity: 0;
    transition: all .3s ease;
    text-align: center;
`

export const StyledSelectionBox = styled.div`
    touch-action:pan-y;
    align-items: center;
    background: ${colors.white};
    border-radius: 0 0 15px 15px;
    justify-content: flex-start;
    display: flex;
	grid-column: 1 / 3;
    grid-row: 2 / 3;

    overflow: auto;
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: scroll;
`

export const StyledItemContainer = styled.div`;
    align-items: center;
    border: 2px solid ${colors.white};
    border-radius: 50%;
    box-shadow: ${shadows.button};
    display: flex;
    justify-content: center;
    height: 9rem;
    position: relative;
    width: 9rem;
    margin: -2rem 1.5rem 0;
    transition: all .3s ease;

    &:hover {
        border: 2px solid ${colors.blue};
        box-shadow: ${shadows.buttonHover};
        cursor: grab;

        #item-text {
            opacity: 1;
            transform: translateY(1.5rem);
            width: 30rem;

            ${media.xl`
                transform: translateY(2rem);
            `}
        }
    }

    &:active {
        box-shadow: none;
        cursor: grabbing;
    }
    
    ${media.xl`
        height: 12rem;
        margin: -2rem 3rem 0;
        width: 12rem;
    `}
`

export const StyledItemContainerInactive = styled.div`
    align-items: center;
    background: #EAEAEA;
    border: 2px solid #EAEAEA;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    height: 9rem;
    width: 9rem;
    margin: -2rem 1.5rem 0;

    ${media.xl`
        margin: -2rem 3rem 0;
        height: 12rem;
        width: 12rem;
    `}
`

export const StyledPhotoContainer = styled.div`
    height: 5.5rem;
    width: 5.5rem;

    &:hover {
        #item-text {
            color: red;
        }
    }

    ${media.xl`
        height: 7rem;
        width: 7rem;
    `}
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
