import React from 'react'
import styled from 'styled-components'
import { colors, shadows } from '../components/theme'

const ITEMS = [
    'food-1', 'food-2', 'food-3', 'food-4', 'food-5', 'food-6', 'food-7', 'food-8', 'food-9', 'food-10', 'food-11', 'food-12', 'food-13', 'food-14'
]

const SelectionBox: React.FC<any> = ({
    canvasItems,
    drag,
}) => {
    return (
        <StyledSelectionBox>
            {ITEMS.map(item => {
                return (
                    <>
                        {canvasItems.largePortion.item !== item
                        && canvasItems.smallPortion1.item !== item 
                        && canvasItems.smallPortion2.item !== item
                        && canvasItems.cup.item !== item
                        && canvasItems.bowl.item !== item
                            ? <StyledItemContainer key={item}>
                                <StyledPhotoContainer>
                                    <StyledItemPhoto
                                        id={`${item}`}
                                        draggable={"true"}
                                        onDragStart={(e:any) => drag(e)}
                                        style={{ backgroundImage: `url('/static/dummy-foods/${item}.png')`}}
                                    />
                                </StyledPhotoContainer>
                            </StyledItemContainer>
                            : <StyledItemContainerInactive key={item}>
                                <StyledPhotoContainer>
                                    <StyledItemPhotoInactive
                                        id={`${item}`}
                                        draggable={"true"}
                                        onDragStart={(e:any) => drag(e)}
                                        style={{ backgroundImage: `url('/static/dummy-foods/${item}.png')`}}
                                    />
                                </StyledPhotoContainer>
                            </StyledItemContainerInactive>
                        }
                    </>
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

const StyledItemContainerInactive = styled.div`
    align-items: center;
    background: #EAEAEA;
    border: 2px solid #EAEAEA;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    height: 12rem;
    width: 12rem;
    margin: 0 3rem 3rem;
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

const StyledItemPhotoInactive = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    opacity: .5;
    width: 100%;
`
