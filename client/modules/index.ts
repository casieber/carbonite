import { combineReducers } from 'redux';

import editor, { EditorState } from './editor';
import styling, { StylingState } from './styling';
import image, { ImageState } from './image';

export interface ApplicationState {
	editor: EditorState;
	styling: StylingState;
	image: ImageState;
}

const rootReducer = combineReducers({
	editor,
	styling,
	image,
});

export default rootReducer;
