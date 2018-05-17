import * as React from 'react';

export interface ToggleProps {
	/**
	 * The current toggle state
	 */
	value: boolean;

	/**
	 * The label for the toggle
	 */
	label: string;

	/**
	 * Change handler for the toggle
	 */
	onChange: (value: boolean) => any;
}

const Toggle = ({ value, label, onChange }: ToggleProps) => (
	<span>
		<label>{label}</label>
		<input
			type="checkbox"
			checked={value}
			onChange={e => onChange(e.target.checked)}
		/>
	</span>
);

export default Toggle;
