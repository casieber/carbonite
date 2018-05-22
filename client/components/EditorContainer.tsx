import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import CodeMirrorEditor from './CodeMirrorEditor';
import {
	CAPTURE_NODE_ID,
	CAPTURE_HIDDEN_CLASSNAME,
	BACKGROUND_COLOR_ID,
} from '../constants';
import { ApplicationState } from '../modules';
import { EditorState, setValue } from '../modules/editor';
import { Color, PaddingState, ShadowState } from '../modules/styling';

const styleEmbed = ({ enabled, offset, spread }: ShadowState) => `
.CodeMirror {
	height: auto;
	padding: 20px;
	border-radius: 10px;
	${enabled ? `box-shadow: 0 ${offset}px ${spread}px rgba(0, 0, 0, 0.55);` : ''}
}

.CodeMirror-scroll {
	overflow: hidden !important;
}

.CodeMirror-container {
	font-size: 20px;
}`;

const containerStyles: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'relative',
};

const innerContainerStyles = (padding: PaddingState): React.CSSProperties => ({
	padding: `${padding.vertical}px ${padding.horizontal}px`,
});

const alphaImage: React.CSSProperties = {
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	background:
		'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==)',
};

const whiteImage: React.CSSProperties = {
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	backgroundColor: 'white',
};

const buildColorStyle = (color: string | Color): React.CSSProperties => ({
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	backgroundColor:
		typeof color === 'string'
			? color
			: typeof color.a === 'number'
				? `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
				: `rgb(${color.r}, ${color.g}, ${color.b})`,
});

const backgroundLayers: React.CSSProperties = {
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
};

export interface EditorContainerProps {
	color: Color;
	padding: PaddingState;
	editor: EditorState;
	shadow: ShadowState;
	onValueChange: (value: string) => any;
}

class EditorContainer extends React.Component<EditorContainerProps> {
	render() {
		const { color, editor, padding, onValueChange, shadow } = this.props;

		return (
			<div style={containerStyles} id={CAPTURE_NODE_ID}>
				<div style={innerContainerStyles(padding)}>
					<div style={backgroundLayers}>
						<div style={whiteImage} className={CAPTURE_HIDDEN_CLASSNAME} />
						<div style={alphaImage} className={CAPTURE_HIDDEN_CLASSNAME} />
						<div
							style={buildColorStyle(color)}
							id={BACKGROUND_COLOR_ID}
							className={CAPTURE_HIDDEN_CLASSNAME}
						/>
					</div>
					<CodeMirrorEditor {...editor} onValueChange={onValueChange} />
				</div>
				<style>{styleEmbed(shadow)}</style>
			</div>
		);
	}
}

const mapStateToProps = (state: ApplicationState) => ({
	color: state.styling.background.color,
	padding: state.styling.padding,
	shadow: state.styling.shadow,
	editor: state.editor,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onValueChange: (value: string) => dispatch(setValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer);
