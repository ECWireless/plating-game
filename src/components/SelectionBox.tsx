import React from 'react'
import styled from 'styled-components'
import { colors } from '../components/theme'

const SelectionBox: React.FC = () => {
    return (
        <StyledSelectionBox>
            Selection Box
        </StyledSelectionBox>
    )
}

export default SelectionBox

const StyledSelectionBox = styled.div`
	border: 2px solid ${colors.blue};
	grid-column: 1 / 3;
	grid-row: 2 / 3;
`
