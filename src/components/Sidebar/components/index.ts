import styled from 'styled-components'
import { media } from '../../../components/Breakpoints'
import { colors } from '../../../components/theme'

export const StyledRemoveButtonContainer = styled.div`
    position: absolute;
    bottom: 2rem;
    left: 4rem;
`

export const StyledSelectionButtonContainer = styled.div`
    margin-top: 1.5rem;

    ${media.lg`
        margin-top: 2rem;
    `}
`

export const StyledSidebar = styled.div`
    background: ${colors.white};
    border-bottom: 2px solid ${colors.blue};
    border-radius: 0 15px 0 0;
    display: flex;
    flex-direction: column;
	grid-column: 2 / 2;
    grid-row: 1 / 2;
    padding: 4rem 5rem;
    position: relative;
`

export const StyledTextContainer = styled.div`
    margin-top: 3rem;

    ${media.lg`
        margin-top: 5rem;
    `}
`
