export interface ICanvas {
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

export interface ISelectedItemData {
	filename: string;
	name: string;
	foodType: string;
	correctPortion: string;
	messageWrong: string;
	messageRight: string;
}