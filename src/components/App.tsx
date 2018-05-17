import * as React from 'react';

import Toolbar from './Toolbar';
import EditorContainer from './EditorContainer';
import Button from './Button';
import BackgroundPicker from './BackgroundPicker';

import AppContext, { defaultConfig } from '../context';
import { MonacarbonConfig } from '../types';

import { saveImage } from '../actions';

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

export default class App extends React.Component<{}, { config: MonacarbonConfig }> {
	constructor(props: {}) {
		super(props);

		this.state = {
			config: defaultConfig,
		};
	}

	render() {
		const { config } = this.state;

		return (
			<AppContext.Provider value={config}>
				<div style={appStyles}>
					<Toolbar>
						<BackgroundPicker onChange={color => this.setState({
							config: {
								...config,
								backgroundColor: color
							}
						})}/>
						<Button onClick={saveImage}>Save PNG</Button>
					</Toolbar>
					<EditorContainer />
					<style>{styleEmbed}</style>
				</div>
			</AppContext.Provider>
		);
	}
}