import React from 'react'
import styled from 'styled-components'
import { media } from './components/Breakpoints'

// Components
import PlatingCanvas from './components/PlatingCanvas'
import Sidebar from './components/Sidebar'
import SelectionBox from './components/SelectionBox'

function App() {
	const [bowlVisible, setBowlVisible] = React.useState(true)
	const [cupVisible, setCupVisible] = React.useState(true)

	const allowDrop = (e: any) => {
		e.preventDefault();
	}
	
	const drag = (e: any) => {
		e.dataTransfer.setData("text", e.target.id);
	}
	
	const drop = (e: any) => {
		e.preventDefault();
		let data = e.dataTransfer.getData("text");
		e.target.appendChild(document.getElementById(data));

		if (e.target.id === 'placement-cup') {
			setCupVisible(false)
		} else if (e.target.id === 'placement-bowl') {
			setBowlVisible(false)
		}
	}

	return (
		<StyledGameContainer>
			<PlatingCanvas
				bowlVisible={bowlVisible}
				cupVisible={cupVisible}
				allowDrop={(e: any) => allowDrop(e)} drop={(e: any) => drop(e)}
			/>
			<Sidebar />
			<SelectionBox drag={(e: any) => drag(e)} />
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
