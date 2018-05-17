import * as React from 'react';
import {
	CommandBar,
	IContextualMenuItem,
	CommandButton,
} from 'office-ui-fabric-react';

import themes from '../themes';
import AppContext from '../context';

/**
 * Left side menu bar items
 */
const closeItems = ({ theme, setTheme }: any): IContextualMenuItem[] => [
	{
		key: 'theme',
		name: 'Theme',
		onRender: item => {
			return (
				<CommandButton menuProps={{ items: item.subMenuProps.items }}>
					{item.name}
				</CommandButton>
			);
		},
		subMenuProps: {
			items: themes.map(({ label, value }) => ({
				key: value,
				name: label,
				checked: value === theme,
				canCheck: true,
				onClick: () => setTheme(value),
			})),
		},
	},
	{
		key: 'bg',
		name: 'Background',
		onRender: item => <CommandButton>{item.name}</CommandButton>,
	},
];

/**
 * Right side menu bar items
 */
const farItems: IContextualMenuItem[] = [
	{
		key: 'save-png',
		name: 'Save PNG',
		onRender: item => (
			<CommandButton iconProps={{ iconName: 'Picture' }}>
				{item.name}
			</CommandButton>
		),
	},
];

interface ToolbarProps {
	setTheme: (theme: string) => any;
}

export default class Toolbar extends React.Component<ToolbarProps> {
	render() {
		const { setTheme } = this.props;

		return (
			<AppContext.Consumer>
				{config => {
					return (
						<CommandBar
							items={closeItems({ theme: config.editor.theme, setTheme })}
							farItems={farItems}
						/>
					);
				}}
			</AppContext.Consumer>
		);
	}
}
