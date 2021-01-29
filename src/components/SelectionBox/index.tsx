import React from 'react'
import { colors } from '../theme'

// Components
import  {
    StyledLabelContainer,
    StyledSelectionBox,
    StyledItemContainer,
    StyledItemContainerInactive,
    StyledPhotoContainer,
    StyledItemPhoto,
    StyledItemPhotoInactive
} from './components'
import { P1 } from '../Typography'

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
                    <div key={item}>
                        {canvasItems.largePortion.item !== item
                        && canvasItems.smallPortion1.item !== item 
                        && canvasItems.smallPortion2.item !== item
                        && canvasItems.cup.item !== item
                        && canvasItems.bowl.item !== item
                            ? <StyledItemContainer>
                                <StyledPhotoContainer>
                                    <StyledItemPhoto
                                        id={`${item}`}
                                        draggable={"true"}
                                        onDragStart={(e:any) => drag(e)}
                                        style={{ backgroundImage: `url('/static/dummy-foods/${item}.png')`}}
                                    />
                                </StyledPhotoContainer>
                                <StyledLabelContainer id="item-text">
                                    <P1 color={colors.blue}>{item}</P1>
                                </StyledLabelContainer>
                            </StyledItemContainer>
                            : <StyledItemContainerInactive>
                                <StyledPhotoContainer>
                                    <StyledItemPhotoInactive
                                        id={`${item}`}
                                        draggable={"true"}
                                        onDragStart={(e:any) => drag(e)}
                                        style={{ backgroundImage: `url('/static/dummy-foods/${item}.png')`}}
                                    />
                                </StyledPhotoContainer>
                                <StyledLabelContainer id="item-text">
                                    <P1 color={colors.blue}>{item}</P1>
                                </StyledLabelContainer>
                            </StyledItemContainerInactive>
                        }
                    </div>
                )
            })}
        </StyledSelectionBox>
    )
}

export default SelectionBox
