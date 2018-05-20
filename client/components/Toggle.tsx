import * as React from 'react';

import { Toggle as FabricToggle } from 'office-ui-fabric-react';

export interface ToggleProps {
	/**
	 * The current toggle state
	 */
	value: boolean;

	/**
	 * The label for the toggle
	 */
	label?: string;

	/**
	 * Change handler for the toggle
	 */
	onChange: (value: boolean) => any;
}

const Toggle = ({ onChange, ...others }: ToggleProps) => (
	<FabricToggle {...others} onChanged={onChange} />
);

export default Toggle;
