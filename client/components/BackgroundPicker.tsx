import * as React from 'react';
import { SketchPicker } from 'react-color';
import { CommandButton, Callout } from 'office-ui-fabric-react';

import { Color } from '../types';

import AppContext from '../context';

interface BackgroundPickerProps {
	/**
	 * Called when the color changes.
	 */
	onChange: (color: Color) => any;
}

interface BackgroundPickerState {
	/**
	 * Whether or not the picker is open
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

	buttonRef = React.createRef<any>();

	render() {
		const { onChange } = this.props;
		const { open } = this.state;

		return (
			<React.Fragment>
				<div ref={this.buttonRef}>
					<CommandButton onClick={this.showPicker}>Background</CommandButton>
				</div>
				<AppContext.Consumer>
					{value =>
						open && (
							<Callout
								onDismiss={this.hidePicker}
								target={this.buttonRef.current}
							>
								<SketchPicker
									color={value.backgroundColor}
									onChange={({ rgb }) => onChange(rgb)}
								/>
							</Callout>
						)
					}
				</AppContext.Consumer>
			</React.Fragment>
		);
	}

	private showPicker = () => this.setState({ open: true });

	private hidePicker = () => this.setState({ open: false });
}
