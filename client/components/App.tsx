import * as React from 'react';
import { Fabric } from 'office-ui-fabric-react';

import Toolbar from './Toolbar';
import EditorContainer from './EditorContainer';

const appStyles: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	height: '100%',
	backgroundColor: '#121212',
};

export default class App extends React.Component {
	render() {
		return (
			<div style={appStyles}>
				<Fabric>
					<Toolbar />
					<EditorContainer />
				</Fabric>
			</div>
		);
	}
}
