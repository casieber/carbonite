import * as React from 'react';

import { Controlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript';

export default class CodeMirrorEditor extends React.Component<
	any,
	{ value: string }
> {
	state = {
		value: `function foo() { console.log('Hello, World!'); }`,
	};

	render() {
		const options = {
			mode: { name: 'javascript', typescript: true },
			theme: 'monokai',
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
