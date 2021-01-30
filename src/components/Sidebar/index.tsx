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
import { colors } from '../theme'

const Sidebar: React.FC<any> = ({
    answer,
    mealSelection,
    onResetGame,
    recentItem,
    setAnswer,
    setCanvasItems,
    setMealSelection,
}) => {
    console.log(answer)

    const onRemoveRecentItem = () => {
        setAnswer((prev: any) => ({
			...prev,
			answered: false,
			correct: false,
			message: '',
        }))
        
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
                {answer.answered && (
                    <H1 color={answer.correct ? colors.green : colors.red} bold={'true'}>{answer.correct ? `Correct!` : 'Incorrect'}</H1>
                )}
            </StyledTextContainer>
            <P1>{answer.message}</P1>
            {answer.answered && <StyledRemoveButtonContainer>
                <RemoveButton onClick={onRemoveRecentItem}>Remove Item</RemoveButton>
            </StyledRemoveButtonContainer>}
        </StyledSidebar>
    )
}

export default Sidebar
