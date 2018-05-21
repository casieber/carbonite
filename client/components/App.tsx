import * as React from 'react';
import { Fabric } from 'office-ui-fabric-react';

import Toolbar from './Toolbar';
import EditorContainer from './EditorContainer';

import AppContext from '../context';
import { Config } from '../types';
import { saveConfig } from '../storage';
import { defaultConfig } from '../constants';

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

interface AppProps {
	defaultConfig: Config;
}

interface AppState {
	config: Config;
}

export default class App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);

		this.state = {
			config: props.defaultConfig,
		};
	}

	render() {
		const { config } = this.state;

		return (
			<AppContext.Provider value={config}>
				<div style={appStyles}>
					<Fabric>
						<Toolbar
							update={(key, value) => this.updateConfigProperty(key, value)}
							reset={this.resetConfig}
						/>
						<EditorContainer
							onValueChange={value => this.updateConfigProperty('value', value)}
						/>
						<style>{styleEmbed(config)}</style>
					</Fabric>
				</div>
			</AppContext.Provider>
		);
	}

	private resetConfig = () => {
		const { config } = this.state;

		this.updateConfig({
			...defaultConfig,
			// Don't reset a few special properies,
			value: config.value,
			language: config.language,
		});
	};

	private updateConfigProperty<K extends keyof Config>(
		key: K,
		value: Config[K],
	) {
		const config = {
			...this.state.config,
			[key]: value,
		};

		this.updateConfig(config);
	}

	private updateConfig(config: Config) {
		this.setState({ config });
		saveConfig(config);
	}
}
