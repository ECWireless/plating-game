import React from 'react'
import styled from 'styled-components'
import { colors } from '../components/theme'

// Components
import { RemoveButton } from './RemoveButton'
import { ResetPlayButton } from './ResetPlayButton'
import { SelectionButton } from './SelectionButton'
import { H1, H2, P1 } from './Typography'

const Sidebar: React.FC<any> = ({
    recentItem,
    setCanvasItems,
}) => {

    const onResetGame = () => {
        setCanvasItems((prev: any) => ({
            ...prev,
            largePortion: {
                active: false,
                item: '',
            },
            smallPortion1: {
                active: false,
                item: '',
            },
            smallPortion2: {
                active: false,
                item: '',
            },
            cup: {
                active: false,
                item: '',
            },
            bowl: {
                active: false,
                item: '',
            },
        }))
    }

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
                <SelectionButton />
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

const StyledRemoveButtonContainer = styled.div`
    position: absolute;
    bottom: 2rem;
    left: 4rem;
`

const StyledSelectionButtonContainer = styled.div`
    margin-top: 2rem;
`

const StyledSidebar = styled.div`
    border: 2px solid ${colors.blue};
    display: flex;
    flex-direction: column;
	grid-column: 2 / 2;
    grid-row: 1 / 2;
    padding: 4rem 5rem;
    position: relative;
`

const StyledTextContainer = styled.div`
    margin-top: 5rem;
`
