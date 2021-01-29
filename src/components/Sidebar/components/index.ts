import styled from 'styled-components'
import { colors } from '../../../components/theme'

export const StyledRemoveButtonContainer = styled.div`
    position: absolute;
    bottom: 2rem;
    left: 4rem;
`

export const StyledSelectionButtonContainer = styled.div`
    margin-top: 2rem;
`

export const StyledSidebar = styled.div`
    border: 2px solid ${colors.blue};
    display: flex;
    flex-direction: column;
	grid-column: 2 / 2;
    grid-row: 1 / 2;
    padding: 4rem 5rem;
    position: relative;
`

export const StyledTextContainer = styled.div`
    margin-top: 5rem;
`
