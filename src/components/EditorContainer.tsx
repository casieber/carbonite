import * as React from 'react';

import MonacoEditor from './MonacoEditor';
import { EditorConfig } from '../types';

export interface EditorContainerProps {
	config: EditorConfig;
}

const containerStyles: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'relative',
}

const innerContainerStyles: React.CSSProperties = {
	padding: '60px 100px 100px 60px',
}

const alphaImage: React.CSSProperties = {
	width: '100%',
	height: '100%',
	background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==)',
};

const backgroundLayers: React.CSSProperties = {
	zIndex: -1,
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
}

export default class EditorContainer extends React.Component<EditorContainerProps> {
	render() {
		const { config } = this.props;

		return (
			<div style={containerStyles} id="container">
				<div style={innerContainerStyles}>
					<MonacoEditor config={config} />
					<div style={backgroundLayers}>
						<div style={alphaImage} className="eliminateOnSave" />
					</div>
				</div>
			</div>
		);
	}
}