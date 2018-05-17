import * as React from 'react';

import Toolbar from './Toolbar';
import EditorContainer from './EditorContainer';
import Button from './Button';
import BackgroundPicker from './BackgroundPicker';

import AppContext, { defaultConfig } from '../context';
import { MonacarbonConfig } from '../types';

import { saveImage } from '../actions';

import Slider from './Slider';
import Toggle from './Toggle';

const styleEmbed = ({ shadowEnabled, shadowOffset, shadowSpread }: any) => `
html, body, #app {
	padding: 0;
	width: 100%;
	height: 100%;
	margin: 0;
}

.monacarbon-editor {
	padding: 20px;
	border-radius: 10px;
	${shadowEnabled ? `box-shadow: 0 ${shadowOffset}px ${shadowSpread}px rgba(0, 0, 0, 0.55);` : ''}
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
						<BackgroundPicker onChange={color => this.updateConfig('backgroundColor', color)}/>
						<Button onClick={saveImage}>Save PNG</Button>
						<Toggle label='Drop Shadow' value={config.shadowEnabled} onChange={value => this.updateConfig('shadowEnabled', value)}/>
						<Slider min={0} max={100} step={10} value={config.shadowOffset} label='Shadow Offset' onChange={value => this.updateConfig('shadowOffset', value)} />
						<Slider min={0} max={100} step={10} value={config.shadowSpread} label='Shadow Spread' onChange={value => this.updateConfig('shadowSpread', value)} />
					</Toolbar>
					<EditorContainer />
					<style>{styleEmbed(config)}</style>
				</div>
			</AppContext.Provider>
		);
	}

	private updateConfig<K extends keyof MonacarbonConfig>(key: K, value: MonacarbonConfig[K]) {
		this.setState({
			config: {
				...this.state.config,
				[key]: value,
			},
		});
	}
}