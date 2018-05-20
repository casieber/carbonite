import * as React from 'react';

import { Controlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript';

import { themes } from '../constants';

// Load the theme css
Object.keys(themes).forEach(id => {
	require(`codemirror/theme/${id}.css`);
});

export default class CodeMirrorEditor extends React.Component<
	{ theme: string },
	{ value: string }
> {
	state = {
		value: `function foo() { console.log('Hello, World!'); }`,
	};

	render() {
		const { theme } = this.props;

		const options = {
			mode: { name: 'javascript', typescript: true },
			theme,
			lineNumbers: false,
			scrollBarStyle: null,
			viewportMargin: Infinity,
			lineWrapping: true,
			extraKeys: {
				'Shift-Tab': 'indentLess',
			},
		};
		return (
			<CodeMirror
				value={this.state.value}
				options={options}
				onBeforeChange={(_, __, value) => this.setState({ value })}
				className="CodeMirror-container"
			/>
		);
	}
}
