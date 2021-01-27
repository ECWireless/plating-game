import React from 'react'
import styled from 'styled-components'
import { media } from './components/Breakpoints'

// Components
import PlatingCanvas from './components/PlatingCanvas'
import Sidebar from './components/Sidebar'
import SelectionBox from './components/SelectionBox'

interface ICanvas {
	largePortion: {
		active: boolean;
		item: string;
	};
	smallPortion1: {
		active: boolean;
		item: string;
	};
	smallPortion2: {
		active: boolean;
		item: string;
	};
	cup: {
		active: boolean;
		item: string;
	};
	bowl: {
		active: boolean;
		item: string;
	};
}

function App() {
	const [canvasItems, setCanvasItems] = React.useState<ICanvas>({
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
	})

	const [recentItem, setRecentItem] = React.useState('')

	const allowDrop = (e: any) => {
		e.preventDefault();
	}
	
	const drag = (e: any) => {
		e.dataTransfer.setData("text", e.target.id);
	}
	
	const drop = (e: any) => {
		e.preventDefault();
		let data = e.dataTransfer.getData("text");

		if (data === '') {
			return
		} else if (e.target.id === 'placement-large') {
			setCanvasItems(prev => ({
				...prev,
				largePortion: {
					active: true,
					item: data
				}
			}))
			setRecentItem('largePortion')
		} else if (e.target.id === 'placement-small-1') {
			setCanvasItems(prev => ({
				...prev,
				smallPortion1: {
					active: true,
					item: data
				}
			}))
			setRecentItem('smallPortion1')
		} else if (e.target.id === 'placement-small-2') {
			setCanvasItems(prev => ({
				...prev,
				smallPortion2: {
					active: true,
					item: data
				}
			}))
			setRecentItem('smallPortion2')
		} else if (e.target.id === 'placement-cup') {
			setCanvasItems(prev => ({
				...prev,
				cup: {
					active: true,
					item: data
				}
			}))
			setRecentItem('cup')
		} else if (e.target.id === 'placement-bowl') {
			setCanvasItems(prev => ({
				...prev,
				bowl: {
					active: true,
					item: data
				}
			}))
			setRecentItem('bowl')
		}

	}

	return (
		<StyledGameContainer>
			<PlatingCanvas
				drop={(e: any) => drop(e)}
				drag={(e: any) => drag(e)}
				canvasItems={canvasItems}
				setCanvasItems={setCanvasItems}
				allowDrop={(e: any) => allowDrop(e)}
			/>
			<Sidebar recentItem={recentItem} setCanvasItems={setCanvasItems} />
			<SelectionBox canvasItems={canvasItems} drag={(e: any) => drag(e)} />
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
