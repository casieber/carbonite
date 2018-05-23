import { EditorState } from './editor/types';
import { StylingState } from './styling/types';
import { ImageState } from './image/types';

export interface ResetAction {
	type: 'app.reset';
}

export interface ReplaceAction {
	type: 'app.replace';
	payload: ApplicationState;
}

export interface ApplicationState {
	editor: EditorState;
	styling: StylingState;
	image: ImageState;
}
