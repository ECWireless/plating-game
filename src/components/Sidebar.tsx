import React from 'react'
import styled from 'styled-components'
import { media } from '../components/Breakpoints'
import { colors } from '../components/theme'

// Components
import { ResetPlayButton } from './ResetPlayButton'

const Sidebar: React.FC = () => {
    return (
        <StyledSidebar>
            <ResetPlayButton>Reset and Play Again</ResetPlayButton>
        </StyledSidebar>
    )
}

export default Sidebar

const StyledSidebar = styled.div`
    border: 2px solid ${colors.blue};
    display: flex;
    flex-direction: column;
	grid-column: 2 / 2;
    grid-row: 1 / 2;
    padding: 4rem 2rem;
`
