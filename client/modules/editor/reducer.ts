import { EditorState, EditorAction } from './types';
import { ResetAction } from '../types';

const defaultText = `function foo() {
	console.log('Hello, World!');
}`;

const initialState: EditorState = {
	language: 'TypeScript',
	theme: 'seti',
	value: defaultText,
};

function editorReducer(
	state: EditorState = initialState,
	action: EditorAction | ResetAction,
): EditorState {
	switch (action.type) {
		case 'app.reset':
			// Don't reset a few special properties
			return { ...initialState, language: state.language, value: state.value };
		case 'editor.setLanguage':
			return { ...state, language: action.payload };
		case 'editor.setTheme':
			return { ...state, theme: action.payload };
		case 'editor.setValue':
			return { ...state, value: action.payload };
		default:
			return state;
	}
}

export default editorReducer;
