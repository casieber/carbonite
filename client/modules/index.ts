import { combineReducers, Reducer, AnyAction } from 'redux';

import editor from './editor';
import styling from './styling';
import image from './image';
import { ApplicationState } from './types';

const appReducer = combineReducers<ApplicationState>({
	editor,
	styling,
	image,
});

const rootReducer: Reducer<ApplicationState> = (
	state: ApplicationState | undefined,
	action: AnyAction,
) => {
	if (action.type === 'app.replace') {
		return action.payload;
	}

	return appReducer(state, action);
};

export default rootReducer;

export { ApplicationState };
