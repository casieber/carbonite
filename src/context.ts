import { createContext } from 'react';

import { EditorConfig, MonacarbonConfig } from './types';

const defaultEditorConfig: EditorConfig = {
	theme: 'vs-dark',
	lineNumbers: 'off',
	minimap: { enabled: false },
	fontSize: 18,
	codeLens: false,
	scrollbar: {
		vertical: 'hidden'
	},
	folding: false,
	matchBrackets: false,
	renderLineHighlight: 'none',
	renderIndentGuides: false,
	quickSuggestions: false,
	suggestOnTriggerCharacters: false,
	acceptSuggestionOnEnter: false,
	selectionHighlight: false,
	hideCursorInOverviewRuler: true,
	overviewRulerBorder: false,
	extraEditorClassName: 'monacarbon-editor',
	contextmenu: false,
	scrollBeyondLastLine: false,
	parameterHints: false,
	hover: false,
};

export const defaultConfig: MonacarbonConfig = {
	backgroundColor: '#FFFFFF',
	editor: defaultEditorConfig,
}

const AppContext = createContext(defaultConfig);

export default AppContext;