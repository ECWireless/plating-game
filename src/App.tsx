import React from 'react'
import styled from 'styled-components'
import { media } from './components/Breakpoints'
import { colors } from './components/theme'

function App() {
	return (
		<StyledGameContainer>
			<StyledPlatingCanvas>
				Plating Canvas
			</StyledPlatingCanvas>
			<StyledSidebar>
				Sidebar
			</StyledSidebar>
			<StyledSelectionBox>
				Selection Box
			</StyledSelectionBox>
		</StyledGameContainer>
	);
}

export default App;

const StyledGameContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 40rem;
	grid-template-rows: 60rem 30rem;

	${media.xl`
		grid-template-columns: 1fr 50rem;
		grid-template-rows: 80rem 40rem;
	`}
`

const StyledPlatingCanvas = styled.div`
	border: 2px solid ${colors.blue};
	grid-column: 1 / 2;
	grid-row: 1 / 2;
`

const StyledSelectionBox = styled.div`
	border: 2px solid ${colors.blue};
	grid-column: 1 / 3;
	grid-row: 2 / 3;
`

const StyledSidebar = styled.div`
	border: 2px solid ${colors.blue};
	grid-column: 2 / 2;
	grid-row: 1 / 2;
`
