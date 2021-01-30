import React from 'react'

// Components
import {
    StyledRemoveButtonContainer,
    StyledSelectionButtonContainer,
    StyledSidebar,
    StyledTextContainer,
} from './components'
import { RemoveButton } from '../Buttons/RemoveButton'
import { ResetPlayButton } from '../Buttons/ResetPlayButton'
import { SelectionButton } from '../Buttons/SelectionButton'
import { H1, H2, P1 } from '../Typography'

const Sidebar: React.FC<any> = ({
    mealSelection,
    onResetGame,
    recentItem,
    setCanvasItems,
    setMealSelection,
}) => {

    const onRemoveRecentItem = () => {
        if (recentItem === 'largePortion') {
            setCanvasItems((prev: any) => ({
				...prev,
				largePortion: {
					active: false,
					item: ''
				}
			}))
        } else if (recentItem === 'smallPortion1') {
            setCanvasItems((prev: any) => ({
				...prev,
				smallPortion1: {
					active: false,
					item: ''
				}
			}))
        } else if (recentItem === 'smallPortion2') {
            setCanvasItems((prev: any) => ({
				...prev,
				smallPortion2: {
					active: false,
					item: ''
				}
			}))
        } else if (recentItem === 'cup') {
            setCanvasItems((prev: any) => ({
				...prev,
				cup: {
					active: false,
					item: ''
				}
			}))
        } else if (recentItem === 'bowl') {
            setCanvasItems((prev: any) => ({
				...prev,
				bowl: {
					active: false,
					item: ''
				}
			}))
        }
    }
    return (
        <StyledSidebar>
            <ResetPlayButton onClick={onResetGame}>Reset and Play Again</ResetPlayButton>
            <StyledTextContainer>
                <H2>Pick meal type:</H2>
            </StyledTextContainer>
            <StyledSelectionButtonContainer>
                <SelectionButton setMealSelection={setMealSelection} mealSelection={mealSelection} />
            </StyledSelectionButtonContainer>
            <StyledTextContainer>
                <H1 bold={'true'}>Correct!</H1>
            </StyledTextContainer>
            <StyledRemoveButtonContainer>
                <RemoveButton onClick={onRemoveRecentItem}>Remove Item</RemoveButton>
            </StyledRemoveButtonContainer>
            <P1>Great job! Cucumbers are a non-starchy food perfect for filling half your plate.</P1>
        </StyledSidebar>
    )
}

export default Sidebar
