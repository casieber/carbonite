import * as React from 'react';
import { Button as FabricButton } from 'office-ui-fabric-react';

export interface ButtonProps extends React.HTMLProps<any> {
	color?: string;
}

export default class Button extends React.Component<ButtonProps> {
	render() {
		const { color, ...others } = this.props;

		return <FabricButton {...others} />;
	}
}
