import * as React from 'react';

import Toolbar from './Toolbar';
import EditorContainer from './EditorContainer';
import Button from './Button';

import { EditorConfig } from '../types';

const defaultConfig: EditorConfig = {
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

const styleEmbed = `
html, body, #app {
	padding: 0;
	width: 100%;
	height: 100%;
	margin: 0;
}

.monacarbon-editor {
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.55);
	z-index: 1;
}
`;

const appStyles: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	height: '100%',
	backgroundColor: '#121212'
}

export default class App extends React.Component<{}, { config: EditorConfig }> {
	constructor(props: {}) {
		super(props);

		this.state = {
			config: defaultConfig
		};
	}
	render() {
		const { config } = this.state;

		return <div style={appStyles}>
			<Toolbar config={config} onChange={config => this.setState({ config })}>
				<Button>Blah blah</Button>
				<Button>Hello</Button>
				<Button>YoYoYoYOYOYO</Button>
				<Button>Click</Button>
			</Toolbar>
			<EditorContainer config={config} />
			<style>{styleEmbed}</style>
		</div>;
	}
}