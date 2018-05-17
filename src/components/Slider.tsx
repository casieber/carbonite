import * as React from 'react';

export interface SliderProps {
	/**
	 * The minimum value for the slider
	 */
	min: number;

	/**
	 * The maximum value for the slider
	 */
	max: number;

	/**
	 * The current value for the slider
	 */
	value: number;

	/**
	 * The step value for the slider
	 */
	step: number;

	/**
	 * The label for the sliders
	 */
	label: string;

	/**
	 * Change handler for the slider
	 */
	onChange: (value: number) => any;
}

export default class Slider extends React.Component<SliderProps> {
	render() {
		const { onChange, ...others } = this.props;

		return <input type="range" {...others} onChange={this.handleChange} />;
	}

	private handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		this.props.onChange(e.target.valueAsNumber);
}
