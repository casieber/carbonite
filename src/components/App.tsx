import * as React from 'react';

import Toolbar from './Toolbar';
import MonacoEditor from './MonacoEditor';

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

const styleEmbed = `.monacarbon-editor {
	padding: 20px;
	border-radius: 10px;
}`;

const appStyles: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	height: '100%'
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
			<Toolbar config={config} onChange={config => this.setState({ config })} />
			<MonacoEditor config={config} />
			<style>{styleEmbed}</style>
		</div>;
	}
}