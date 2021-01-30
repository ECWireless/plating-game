import React from 'react'

// Components
import {
    StyledBowl,
    StyledCup,
    StyledIndicatorPosition,
    StyledPhoto,
    StyledPlatePlacementContainer,
    StyledPlacement1,
    StyledPlacement2,
    StyledPlacement3,
    StyledPlacement4,
    StyledPlacement5,
    StyledPlate,
    StyledPlatingCanvas,
    StyledPlatingCanvasContainer,
    StyledItemPhoto,
} from './components'
import IndicatorIcon from '../IndicatorIcon'

const PlatingCanvas: React.FC<any> = ({
    allowDrop,
    answer,
    canvasItems,
    drop,
    onRemoveItem,
}) => {

    
    return (
        <StyledPlatingCanvasContainer>
            <StyledPlatingCanvas />
            <StyledPhoto />
            <StyledPlate />
            <StyledPlatePlacementContainer>
                <StyledPlacement1 id='placement-large' onDrop={drop} onDragOver={allowDrop}>
                    {canvasItems.largePortion.active && <StyledItemPhoto
                        id={canvasItems.largePortion.item}
                        onDragStart={() => onRemoveItem('largePortion')}
                        onClick={() => onRemoveItem('largePortion')}
                        draggable={"true"}
                        style={{ backgroundImage: `url('/static/foods/${canvasItems.largePortion.item}.png')`}}
                    />}
                </StyledPlacement1>
                <StyledPlacement2 id='placement-small-1' onDrop={drop} onDragOver={allowDrop}>
                    {canvasItems.smallPortion1.active && <StyledItemPhoto
                        id={canvasItems.smallPortion1.item}
                        onDragStart={() => onRemoveItem('smallPortion1')}
                        onClick={() => onRemoveItem('smallPortion1')}
                        draggable={"true"}
                        style={{ backgroundImage: `url('/static/foods/${canvasItems.smallPortion1.item}.png')`}}
                    />}
                </StyledPlacement2>
                <StyledPlacement3 id='placement-small-2' onDrop={drop} onDragOver={allowDrop}>
                    {canvasItems.smallPortion2.active && <StyledItemPhoto
                        id={canvasItems.smallPortion2.item}
                        onDragStart={() => onRemoveItem('smallPortion2')}
                        onClick={() => onRemoveItem('smallPortion2')}
                        draggable={"true"}
                        style={{ backgroundImage: `url('/static/foods/${canvasItems.smallPortion2.item}.png')`}}
                    />}
                </StyledPlacement3>
            </StyledPlatePlacementContainer>
            {!canvasItems.cup.active && <StyledCup id='cup' />}
            <StyledPlacement4 id='placement-cup' onDrop={drop} onDragOver={allowDrop}>
                {canvasItems.cup.active && <StyledItemPhoto
                    id={canvasItems.cup.item}
                    onDragStart={() => onRemoveItem('cup')}
                    onClick={() => onRemoveItem('cup')}
                    draggable={"true"}
                    style={{ backgroundImage: `url('/static/foods/${canvasItems.cup.item}.png')`}}
                />}
            </StyledPlacement4>
            {!canvasItems.bowl.active && <StyledBowl id='bowl' />}
            <StyledPlacement5 id='placement-bowl' onDrop={drop} onDragOver={allowDrop}>
                {canvasItems.bowl.active && <StyledItemPhoto
                    id={canvasItems.bowl.item}
                    onDragStart={() => onRemoveItem('bowl')}
                    onClick={() => onRemoveItem('bowl')}
                    draggable={"true"}
                    style={{ backgroundImage: `url('/static/foods/${canvasItems.bowl.item}.png')`}}
                />}
            </StyledPlacement5>
            <StyledIndicatorPosition>
                <IndicatorIcon answer={answer} />
            </StyledIndicatorPosition>
        </StyledPlatingCanvasContainer>
    )
}

export default PlatingCanvas
