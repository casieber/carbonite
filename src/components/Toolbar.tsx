import * as React from 'react';
import { EditorConfig } from '../types';

export interface ToolbarProps {
	config: EditorConfig;
	onChange: (config: EditorConfig) => any;
}

export default class Toolbar extends React.Component<ToolbarProps> {
	render() {
		const {
			onChange,
			config,
		} = this.props;

		return <div>
			
		</div>
	}

	private changeValue<K extends keyof EditorConfig>(key: K, value: EditorConfig[K]) {
		const { onChange, config } = this.props;
		this.props.onChange(Object.assign({}, config, { [key]: value }));
	}
}