import React from 'react'
import styled from 'styled-components'
import { media } from './components/Breakpoints'
import { colors } from './components/theme'

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

			// Rules
			if (selectedItemData.foodType === 'Sugary Drink' && (canvasItems.bowl.item === '' || canvasItems.bowl.item === 'banana' || canvasItems.bowl.item === 'yogurt' || canvasItems.bowl.item === 'fruitcup')) {
				setAnswer(prev => ({
					...prev,
					answered: true,
					correct: true,
					message: selectedItemData.messageRight,
				}))
			} else if (selectedItemData.foodType === 'Mild Sugary Drink' && (canvasItems.bowl.item === 'apple' || canvasItems.bowl.item === 'banana' || canvasItems.bowl.item === 'yogurt' || canvasItems.bowl.item === 'fruitcup' || canvasItems.bowl.item === '')) {
				setAnswer(prev => ({
					...prev,
					answered: true,
					correct: true,
					message: selectedItemData.messageRight,
				}))
			} else if (selectedItemData.foodType === 'Sugar-Free Drink' && (canvasItems.bowl.item === 'fruitcup' || canvasItems.bowl.item === 'cookie' || canvasItems.bowl.item === 'apple'|| canvasItems.bowl.item === 'yogurt'|| canvasItems.bowl.item === 'banana'|| canvasItems.bowl.item === 'icecream' || canvasItems.bowl.item === '')) {
				setAnswer(prev => ({
					...prev,
					answered: true,
					correct: true,
					message: selectedItemData.messageRight,
				}))
			} else if (selectedItemData.foodType === 'Water' && (canvasItems.bowl.item === 'cookie' || canvasItems.bowl.item === 'banana' || canvasItems.bowl.item === 'yogurt' || canvasItems.bowl.item === 'fruitcup' || canvasItems.bowl.item === 'icecream' || canvasItems.bowl.item === '')) {
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
		} else if (e.target.id === 'placement-bowl') {
			setCanvasItems(prev => ({
				...prev,
				bowl: {
					active: true,
					item: idData
				}
			}))
			setRecentItem('bowl')

			// Rules
			if (selectedItemData.foodType === 'Fruit' && selectedItemData.name !== 'Apple') {
				setAnswer(prev => ({
					...prev,
					answered: true,
					correct: true,
					message: selectedItemData.messageRight,
				}))
			} else if (selectedItemData.name === 'Apple' && (canvasItems.cup.item === 'milk' || canvasItems.cup.item === 'water' || canvasItems.cup.item === 'sugar-free-soda' || canvasItems.cup.item === '' || canvasItems.cup.item === 'coffee')) {
				setAnswer(prev => ({
					...prev,
					answered: true,
					correct: true,
					message: selectedItemData.messageRight,
				}))
			} else if (selectedItemData.foodType === 'Dairy') {
				setAnswer(prev => ({
					...prev,
					answered: true,
					correct: true,
					message: selectedItemData.messageRight,
				}))
			} else if (selectedItemData.name === 'Ice Cream' && (canvasItems.cup.item === 'water' || canvasItems.cup.item === 'coffee' || canvasItems.cup.item === 'sugar-free-soda' || canvasItems.cup.item === '')) {
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
		<Wrapper>
			<StyledGameContainer>
				<PlatingCanvas
					allowDrop={(e: any) => allowDrop(e)}
					answer={answer}
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
		</Wrapper>
	);
}

export default App;

// const StyledGameContainer = styled.div`
// 	display: grid;
// 	grid-template-columns: 1fr 40rem;
// 	grid-template-rows: 60rem 40rem;

// 	${media.xl`
// 		grid-template-columns: 1fr 50rem;
// 		grid-template-rows: 80rem 50rem;
// 	`}
// `

const StyledGameContainer = styled.div`
	border: 2px solid ${colors.blue};
	border-radius: 15px;
	box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.4);
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: grid;
	grid-template-columns: 52rem 22rem;
	grid-template-rows: 38rem;
    overflow: hidden;
	position: absolute;

	${media.md`
		grid-template-columns: 66rem 30rem;
		grid-template-rows: 42rem 15rem;
	`}

	${media.lg`
		grid-template-columns: 82.5rem 35rem;
		grid-template-rows: 49rem 15rem;
	`}

	${media.xl`
		grid-template-columns: 100rem 40rem;
		grid-template-rows: 72.8rem 20rem;
	`}
`

const Wrapper = styled.div`
	background: linear-gradient(45deg, #7db1e3 12.45%, #fff 96.55%);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    z-index: 0;
`;
