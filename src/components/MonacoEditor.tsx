import * as monaco from 'monaco-editor';
import * as React from 'react';

import { EditorConfig } from '../types';

const defaultText = `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}`;

interface MonacoEditorProps {
	config: EditorConfig;
}

interface MonacoEditorState {
	lineCount: number;
	lineHeight: number;
	maxLineWidth: number;
}

export default class MonacoEditor extends React.Component<MonacoEditorProps, MonacoEditorState> {
	private editorRef: React.RefObject<any>;
	private editor?: monaco.editor.IStandaloneCodeEditor;

	constructor(props: MonacoEditorProps) {
		super(props);

		this.editorRef = React.createRef();

		this.state = {
			lineCount: 0,
			lineHeight: 0,
			maxLineWidth: 0,
		};
	}

	componentDidMount() {
		this.editor = monaco.editor.create(
			this.editorRef.current,
			{
				...this.props.config,
				value: defaultText,
				language: 'typescript'
			}
		);

		this.editor.getModel().onDidChangeContent(this.resizeIfNeeded);

		this.resizeIfNeeded();
	}

	resizeIfNeeded = (evt?: monaco.editor.IModelContentChangedEvent) => {
		if (!this.editor) {
			// Without an editor, there is nothing to resize
			return;
		}

		const {
			lineHeight,
			lineCount,
			maxLineWidth,
		} = this.state;

		const model = this.editor.getModel();
		const config = this.editor.getConfiguration();

		// Check for height changes
		if (lineHeight !== config.lineHeight || lineCount !== model.getLineCount()) {
			this.setState({
				lineHeight: config.lineHeight,
				lineCount: model.getLineCount()
			}, () => this.editor && this.editor.layout());
		}

		// Check for width changes
		// Determine the longest line
		let max = 0;
		for (let i = 1; i <= model.getLineCount(); i++) {
			max = Math.max(max, model.getLineMaxColumn(i));
		}

		const newMaxLineWidth = config.fontInfo.maxDigitWidth * max + 60;

		if (newMaxLineWidth !== maxLineWidth) {
			this.setState({
				maxLineWidth: newMaxLineWidth
			}, () => this.editor && this.editor.layout());
		}
	}

	render() {
		const style: React.CSSProperties = {};

		if (this.editor) {
			const { lineHeight, lineCount, maxLineWidth } = this.state;
			
			style.height = `${lineHeight * lineCount}px`;
			style.width = `${maxLineWidth}px`;
		} else {
			style.display = 'none';
		}

		return <div ref={this.editorRef} style={style} />;
	}
}