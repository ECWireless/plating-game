import React from 'react'
import styled from 'styled-components'
import { media } from './components/Breakpoints'

// Components
import PlatingCanvas from './components/PlatingCanvas'
import Sidebar from './components/Sidebar'
import SelectionBox from './components/SelectionBox'

function App() {
	return (
		<StyledGameContainer>
			<PlatingCanvas />
			<Sidebar />
			<SelectionBox />
		</StyledGameContainer>
	);
}

export default App;

const StyledGameContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 40rem;
	grid-template-rows: 60rem 40rem;

	${media.xl`
		grid-template-columns: 1fr 50rem;
		grid-template-rows: 80rem 50rem;
	`}
`
