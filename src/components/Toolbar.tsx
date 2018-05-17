import * as React from 'react';
import { EditorConfig } from '../types';

import domToImage, { Options } from 'dom-to-image';

const style: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'space-between',
	padding: '10px',
};

export interface ToolbarProps {
	config?: EditorConfig;
	onChange?: (config: EditorConfig) => any;
}

export default class Toolbar extends React.Component<ToolbarProps> {
	render() {
		const { onChange, config, children } = this.props;

		return <div style={style}>{children}</div>;
	}
}
