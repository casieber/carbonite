import { StylingState, StylingAction } from './types';
import { ResetAction } from '../types';

const initialState: StylingState = {
	background: {
		color: '#F5A623',
	},
	shadow: {
		enabled: true,
		spread: 35,
		offset: 15,
	},
	padding: {
		horizontal: 80,
		vertical: 80,
	},
};

function stylingReducer(
	state: StylingState = initialState,
	action: StylingAction | ResetAction,
): StylingState {
	switch (action.type) {
		case 'app.reset':
			return initialState;
		case 'styling.updateBackground':
			return {
				...state,
				background: { ...state.background, ...action.payload },
			};
		case 'styling.updatePadding':
			return { ...state, padding: { ...state.padding, ...action.payload } };
		case 'styling.updateShadow':
			return { ...state, shadow: { ...state.shadow, ...action.payload } };
		default:
			return state;
	}
}

export default stylingReducer;
