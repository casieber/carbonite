import * as React from 'react';
import { SketchPicker } from 'react-color';
import { connect, Dispatch } from 'react-redux';
import { CommandButton, Callout } from 'office-ui-fabric-react';

import { Color, updateBackground } from '../modules/styling';
import { ApplicationState } from '../modules';

interface BackgroundPickerProps {
	/**
	 * Called when the color changes.
	 */
	onChange: (color: Color) => any;

	/**
	 * The current color.
	 */
	color: Color;
}

interface BackgroundPickerState {
	/**
	 * Whether or not the picker is open
	 */
	open: boolean;
}

class BackgroundPicker extends React.Component<
	BackgroundPickerProps,
	BackgroundPickerState
> {
	state: BackgroundPickerState = {
		open: false,
	};

	buttonRef = React.createRef<any>();

	render() {
		const { color, onChange } = this.props;
		const { open } = this.state;

		return (
			<React.Fragment>
				<div ref={this.buttonRef}>
					<CommandButton onClick={this.showPicker}>Background</CommandButton>
				</div>
				{open && (
					<Callout onDismiss={this.hidePicker} target={this.buttonRef.current}>
						<SketchPicker color={color} onChange={({ rgb }) => onChange(rgb)} />
					</Callout>
				)}
			</React.Fragment>
		);
	}

	private showPicker = () => this.setState({ open: true });

	private hidePicker = () => this.setState({ open: false });
}

const mapStateToProps = (state: ApplicationState) => ({
	color: state.styling.background.color,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onChange: (color: Color) => dispatch(updateBackground({ color })),
});

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundPicker);
