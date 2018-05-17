import * as React from 'react';

import MonacoEditor from './MonacoEditor';
import { EditorConfig, Color } from '../types';
import AppContext from '../context';
import { CAPTURE_NODE_ID, CAPTURE_HIDDEN_CLASSNAME } from '../constants';

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
	position: 'absolute',
	width: '100%',
	height: '100%',
	background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==)',
};

const whiteImage: React.CSSProperties = {
	position: 'absolute',
	width: '100%',
	height: '100%',
	backgroundColor: 'white'
}

const buildColorStyle = (color: string | Color): React.CSSProperties => ({
	position: 'absolute',
	width: '100%',
	height: '100%',
	backgroundColor:
		typeof color === 'string' ? color :
		color.a ? `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` :
		`rgb(${color.r}, ${color.g}, ${color.b})`,
});

const backgroundLayers: React.CSSProperties = {
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
}

export default class EditorContainer extends React.Component {
	render() {
		return <AppContext.Consumer>
			{({ editor, backgroundColor }) =>
				<div style={containerStyles} id={CAPTURE_NODE_ID}>
					<div style={innerContainerStyles}>
						<MonacoEditor config={editor} />
						<div style={backgroundLayers}>
							<div style={whiteImage} className={CAPTURE_HIDDEN_CLASSNAME} />
							<div style={alphaImage} className={CAPTURE_HIDDEN_CLASSNAME} />
							<div style={buildColorStyle(backgroundColor)} />
						</div>
					</div>
				</div>
			}
		</AppContext.Consumer>;
	}
}