import React from 'react'

// Components
import  {
    StyledSelectionBox,
    StyledItemContainer,
    StyledItemContainerInactive,
    StyledPhotoContainer,
    StyledItemPhoto,
    StyledItemPhotoInactive
} from './components'

// Consts
import { ITEMS } from '../../constants'

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
