import React from 'react'
import { colors } from '../theme'

// Components
import  {
    FoodLabel,
    StyledLabelContainer,
    StyledSelectionBox,
    StyledItemContainer,
    StyledItemContainerInactive,
    StyledPhotoContainer,
    StyledItemPhoto,
    StyledItemPhotoInactive
} from './components'

const SelectionBox: React.FC<any> = ({
    canvasItems,
    data,
    drag,
}) => {
    return (
        <StyledSelectionBox>
            {data.map((item: any) => {
                const name = item.name
                const filename = item.filename
                return (
                    <div key={filename}>
                        {canvasItems.largePortion.item !== filename
                        && canvasItems.smallPortion1.item !== filename 
                        && canvasItems.smallPortion2.item !== filename
                        && canvasItems.cup.item !== filename
                        && canvasItems.bowl.item !== filename
                            ? <StyledItemContainer>
                                <StyledPhotoContainer>
                                    <StyledItemPhoto
                                        id={`${filename}`}
                                        draggable={"true"}
                                        onDragStart={(e:any) => drag(e)}
                                        style={{ backgroundImage: `url('/static/foods/${filename}.png')`}}
                                    />
                                </StyledPhotoContainer>
                                <StyledLabelContainer id="item-text">
                                    <FoodLabel color={colors.blue}>{name}</FoodLabel>
                                </StyledLabelContainer>
                            </StyledItemContainer>
                            : <StyledItemContainerInactive>
                                <StyledPhotoContainer>
                                    <StyledItemPhotoInactive
                                        id={`${filename}`}
                                        draggable={"true"}
                                        onDragStart={(e:any) => drag(e)}
                                        style={{ backgroundImage: `url('/static/foods/${filename}.png')`}}
                                    />
                                </StyledPhotoContainer>
                                <StyledLabelContainer id="item-text">
                                    <FoodLabel color={colors.blue}>{name}</FoodLabel>
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
