import * as React from 'react';

import { Controlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript';

import { themes, languages } from '../constants';

// Load the theme css
Object.keys(themes).forEach(id => {
	require(`codemirror/theme/${id}.css`);
});

const languageToMode = (languageId: string) => {
	const { id, mode, ...others } = languages[languageId];

	require(`codemirror/mode/${mode}/${mode}`);

	return Object.keys(others).length > 0 ? { name: mode, ...others } : mode;
};

export default class CodeMirrorEditor extends React.Component<
	{ theme: string; language: string },
	{ value: string }
> {
	state = {
		value: `function foo() { console.log('Hello, World!'); }`,
	};

	render() {
		const { theme, language } = this.props;

		const options = {
			mode: languageToMode(language),
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
