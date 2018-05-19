import * as React from 'react';
import { Fabric } from 'office-ui-fabric-react';

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
	${
		shadowEnabled
			? `box-shadow: 0 ${shadowOffset}px ${shadowSpread}px rgba(0, 0, 0, 0.55);`
			: ''
	}
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

export default class App extends React.Component<
	{},
	{ config: MonacarbonConfig }
> {
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
						<Toolbar
							setTheme={theme => this.updateEditorConfig('theme', theme)}
							update={(key, value) => this.updateConfig(key, value)}
						/>
						<EditorContainer />
						<style>{styleEmbed(config)}</style>
					</Fabric>
				</div>
			</AppContext.Provider>
		);
	}

	private updateConfig<K extends keyof MonacarbonConfig>(
		key: K,
		value: MonacarbonConfig[K],
	) {
		this.setState({
			config: {
				...this.state.config,
				[key]: value,
			},
		});
	}

	private updateEditorConfig<K extends keyof MonacarbonConfig['editor']>(
		key: K,
		value: MonacarbonConfig['editor'][K],
	) {
		this.updateConfig('editor', {
			...this.state.config.editor,
			[key]: value,
		});
	}
}
