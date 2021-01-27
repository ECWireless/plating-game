import React from 'react'
import styled from 'styled-components'
import { colors, shadows } from '../components/theme'

const ITEMS = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'
]

const SelectionBox: React.FC<any> = ({
    drag,
}) => {
    return (
        <StyledSelectionBox>
            {ITEMS.map(item => {
                return (
                    <StyledItemContainer key={item}>
                        <StyledPhotoContainer>
                            <StyledItemPhoto
                                id={`food-${item}`}
                                draggable={"true"}
                                onDragStart={(e:any) => drag(e)}
                                style={{ backgroundImage: `url('/static/dummy-foods/${item}.png')`}}
                            />
                        </StyledPhotoContainer>
                    </StyledItemContainer>
                )
            })}
        </StyledSelectionBox>
    )
}

export default SelectionBox

const StyledSelectionBox = styled.div`
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

const StyledItemContainer = styled.div`
    align-items: center;
    border: 2px solid ${colors.white};
    border-radius: 50%;
    box-shadow: ${shadows.button};
    display: flex;
    justify-content: center;
    height: 12rem;
    width: 12rem;
    margin: 0 3rem 3rem;
    transition: all .3s ease;

    &:hover {
        border: 2px solid ${colors.blue};
        box-shadow: ${shadows.buttonHover};
        cursor: grab;
    }

    &:active {
        box-shadow: none;
        cursor: grabbing;
    }
`

const StyledPhotoContainer = styled.div`
    height: 7rem;
    width: 7rem;
`

const StyledItemPhoto = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
`
