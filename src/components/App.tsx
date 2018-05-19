import * as React from 'react';
import { Fabric } from 'office-ui-fabric-react';

import Toolbar from './Toolbar';
import EditorContainer from './EditorContainer';

import AppContext, { defaultConfig } from '../context';
import { Config } from '../types';

const styleEmbed = ({ shadowEnabled, shadowOffset, shadowSpread }: any) => `
html, body, #app {
	padding: 0;
	width: 100%;
	height: 100%;
	margin: 0;
}

.CodeMirror {
	padding: 20px;
	border-radius: 10px;
	${
		shadowEnabled
			? `box-shadow: 0 ${shadowOffset}px ${shadowSpread}px rgba(0, 0, 0, 0.55);`
			: ''
	}
}

.CodeMirror {
	height: auto;
}

.CodeMirror-scroll {
	overflow: hidden !important;
}

.CodeMirror-container {
	font-size: 20px;
}
`;

const appStyles: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	height: '100%',
	backgroundColor: '#121212',
};

export default class App extends React.Component<{}, { config: Config }> {
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
					<Fabric>
						<Toolbar update={(key, value) => this.updateConfig(key, value)} />
						<EditorContainer />
						<style>{styleEmbed(config)}</style>
					</Fabric>
				</div>
			</AppContext.Provider>
		);
	}

	private updateConfig<K extends keyof Config>(key: K, value: Config[K]) {
		this.setState({
			config: {
				...this.state.config,
				[key]: value,
			},
		});
	}
}
