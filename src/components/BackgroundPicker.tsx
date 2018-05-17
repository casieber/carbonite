import * as React from 'react';
import { SketchPicker } from 'react-color';

interface BackgroundPickerState {
	open: boolean;
}

export default class BackgroundPicker extends React.Component<{}, BackgroundPickerState> {
	state: BackgroundPickerState = {
		open: false
	};

	render() {
		const { open } = this.state;

		return <div>
			<button onClick={() => this.setState({ open: true })}>BG</button>
			{open && <SketchPicker />}
		</div>;
	}
}