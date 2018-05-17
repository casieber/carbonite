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
	padding: '60px 100px 100px 60px',
	background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==)',
}

export default class EditorContainer extends React.Component<EditorContainerProps> {
	render() {
		const { config } = this.props;

		return (
			<div style={containerStyles}>
				<MonacoEditor config={config} />
			</div>
		);
	}
}