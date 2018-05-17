import * as React from 'react';
import { EditorConfig } from '../types';

import domToImage, { Options } from 'dom-to-image';

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
			<button onClick={this.saveImage}>Save Image</button>
		</div>
	}

	private takeImage = () => {
		const node = document.getElementById('container');

		if (!node) {
			throw new Error('Could not find the editor container');
		}

		const config: Options = {
			filter: (n: any) => {
				if (n.className) {
					return String(n.className).indexOf('eliminateOnSave') < 0;
				}

				return true;
			}
		};

		return domToImage.toPng(node, config);
	}

	private saveImage = () => {
		const link = document.createElement('a')
		this.takeImage().then(url => {
				link.download = `carbon.png`;
				link.href = url;
				document.body.appendChild(link);
				link.click();
				link.remove();
			});
		};

	private changeValue<K extends keyof EditorConfig>(key: K, value: EditorConfig[K]) {
		const { onChange, config } = this.props;
		this.props.onChange(Object.assign({}, config, { [key]: value }));
	}
}