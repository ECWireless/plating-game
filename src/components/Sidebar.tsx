import React from 'react'
import styled from 'styled-components'
import { media } from '../components/Breakpoints'
import { colors } from '../components/theme'

const Sidebar: React.FC = () => {
    return (
        <StyledSidebar>
            Sidebar
        </StyledSidebar>
    )
}

export default Sidebar

const StyledSidebar = styled.div`
	border: 2px solid ${colors.blue};
	grid-column: 2 / 2;
	grid-row: 1 / 2;
`
