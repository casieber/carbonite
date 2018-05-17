import * as React from 'react';
import { SketchPicker } from 'react-color';
import { Color } from '../types';

import AppContext from '../context';

import Button from './Button';

interface BackgroundPickerProps {
	/**
	 * Called when the color changes.
	 */
	onChange: (color: Color) => any;
}

interface BackgroundPickerState {
	/**
	 * Whether or not the color picker is open.
	 */
	open: boolean;
}

export default class BackgroundPicker extends React.Component<
	BackgroundPickerProps,
	BackgroundPickerState
> {
	state: BackgroundPickerState = {
		open: false,
	};

	render() {
		const { onChange } = this.props;
		const { open } = this.state;

		return (
			<AppContext.Consumer>
				{value => (
					<div>
						<Button onClick={() => this.setState({ open: true })}>
							Change Background
						</Button>
						{open && (
							<div style={{ position: 'absolute', zIndex: 5 }}>
								<SketchPicker
									color={value.backgroundColor}
									onChange={({ rgb }) => onChange(rgb)}
								/>
							</div>
						)}
					</div>
				)}
			</AppContext.Consumer>
		);
	}
}
