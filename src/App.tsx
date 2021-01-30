import React from 'react'
import styled from 'styled-components'
import { media } from './components/Breakpoints'

// Components
import PlatingCanvas from './components/PlatingCanvas'
import Sidebar from './components/Sidebar'
import SelectionBox from './components/SelectionBox'

// Interfaces
import { ICanvas, ISelectedItemData } from './components/faces'

// Constants
import { BREAKFAST_ITEMS, LINNER_ITEMS } from './constants'

function App() {

	// State
	const [answer, setAnswer] = React.useState({
		answered: false,
		correct: false,
		message: '',
	})
	const [data, setData] = React.useState(BREAKFAST_ITEMS)
	const [mealSelection, setMealSelection] = React.useState('breakfast')
	const [recentItem, setRecentItem] = React.useState('')
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

	// Effect
	React.useEffect(() => {
		onResetGame()
		if (mealSelection === 'breakfast') {
			setData(BREAKFAST_ITEMS)
		} else if (mealSelection === 'linner') {
			setData(LINNER_ITEMS)
		}
	}, [mealSelection])

	// Functions
	const allowDrop = (e: any) => {
		e.preventDefault();
	}
	
	const drag = (e: any) => {
		e.dataTransfer.setData("text", e.target.id);
	}
	
	const drop = (e: any) => {
		e.preventDefault();
		let idData = e.dataTransfer.getData("text");
		let selectedItemData: ISelectedItemData = {
			filename: '',
			name: '',
			foodType: '',
			correctPortion: '',
			messageWrong: '',
			messageRight: '',
		}
		data.forEach((food: any) => {
			if (food.filename === idData) {
				selectedItemData = food
			}
		})

		if (idData === '') {
			return
		} else if (e.target.id === 'placement-large') {
			setCanvasItems(prev => ({
				...prev,
				largePortion: {
					active: true,
					item: idData
				}
			}))
			setRecentItem('largePortion')

			// Rules
			if (selectedItemData.correctPortion === 'Half') {
				setAnswer(prev => ({
					...prev,
					answered: true,
					correct: true,
					message: selectedItemData.messageRight,
				}))
			} else {
				setAnswer(prev => ({
					...prev,
					answered: true,
					correct: false,
					message: selectedItemData.messageWrong,
				}))
			}
		} else if (e.target.id === 'placement-small-1') {
			setCanvasItems(prev => ({
				...prev,
				smallPortion1: {
					active: true,
					item: idData
				}
			}))

			// Rules
			setRecentItem('smallPortion1')
			if (selectedItemData.correctPortion === 'Quarter') {
				setAnswer(prev => ({
					...prev,
					answered: true,
					correct: true,
					message: selectedItemData.messageRight,
				}))
			} else {
				setAnswer(prev => ({
					...prev,
					answered: true,
					correct: false,
					message: selectedItemData.messageWrong,
				}))
			}
		} else if (e.target.id === 'placement-small-2') {
			setCanvasItems(prev => ({
				...prev,
				smallPortion2: {
					active: true,
					item: idData
				}
			}))
			setRecentItem('smallPortion2')

			// Rules
			if (selectedItemData.correctPortion === 'Quarter') {
				setAnswer(prev => ({
					...prev,
					answered: true,
					correct: true,
					message: selectedItemData.messageRight,
				}))
			} else {
				setAnswer(prev => ({
					...prev,
					answered: true,
					correct: false,
					message: selectedItemData.messageWrong,
				}))
			}
		} else if (e.target.id === 'placement-cup') {
			setCanvasItems(prev => ({
				...prev,
				cup: {
					active: true,
					item: idData
				}
			}))
			setRecentItem('cup')
		} else if (e.target.id === 'placement-bowl') {
			setCanvasItems(prev => ({
				...prev,
				bowl: {
					active: true,
					item: idData
				}
			}))
			setRecentItem('bowl')
		}

	}

	const onRemoveItem = (removedItem: string) => {
		setAnswer(prev => ({
			...prev,
			answered: false,
			correct: false,
			message: '',
		}))

        if (removedItem === 'largePortion') {
            setCanvasItems((prev: any) => ({
                ...prev,
                largePortion: {
                    active: false,
                    item: ''
                }
            }))
        } else if (removedItem === 'smallPortion1') {
            setCanvasItems((prev: any) => ({
                ...prev,
                smallPortion1: {
                    active: false,
                    item: ''
                }
            }))
        } else if (removedItem === 'smallPortion2') {
            setCanvasItems((prev: any) => ({
                ...prev,
                smallPortion2: {
                    active: false,
                    item: ''
                }
            }))
        } else if (removedItem === 'cup') {
            setCanvasItems((prev: any) => ({
                ...prev,
                cup: {
                    active: false,
                    item: ''
                }
            }))
        } else if (removedItem === 'bowl') {
            setCanvasItems((prev: any) => ({
                ...prev,
                bowl: {
                    active: false,
                    item: ''
                }
            }))
        }
	}
	
	const onResetGame = () => {
		setAnswer(prev => ({
			...prev,
			answered: false,
			correct: false,
			message: '',
		}))
		
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

	return (
		<StyledGameContainer>
			<PlatingCanvas
				allowDrop={(e: any) => allowDrop(e)}
				canvasItems={canvasItems}
				drag={(e: any) => drag(e)}
				drop={(e: any) => drop(e)}
				onRemoveItem={onRemoveItem}
				setCanvasItems={setCanvasItems}
			/>
			<Sidebar
				answer={answer}
				mealSelection={mealSelection}
				onResetGame={onResetGame}
				recentItem={recentItem}
				setAnswer={setAnswer}
				setCanvasItems={setCanvasItems}
				setMealSelection={setMealSelection}
			/>
			<SelectionBox canvasItems={canvasItems} data={data} drag={(e: any) => drag(e)} />
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
