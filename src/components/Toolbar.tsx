import * as React from 'react';
import {
	CommandBar,
	IContextualMenuItem,
	CommandButton,
	ContextualMenuItem,
	Label,
} from 'office-ui-fabric-react';

import themes from '../themes';
import AppContext from '../context';

import Slider from './Slider';
import Toggle from './Toggle';
import BackgroundPicker from './BackgroundPicker';
import { MonacarbonConfig } from '../types';

/**
 * Left side menu bar items
 */
const closeItems = ({
	theme,
	horizontalPadding,
	verticalPadding,
	update,
	setTheme,
	shadowEnabled,
	shadowOffset,
	shadowSpread,
}: any): IContextualMenuItem[] => [
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
		onRender: item => (
			<BackgroundPicker onChange={color => update('backgroundColor', color)} />
		),
	},
	{
		key: 'settings',
		name: 'Settings',
		onRender: item => (
			<CommandButton menuProps={{ items: item.subMenuProps.items }}>
				{item.name}
			</CommandButton>
		),
		subMenuProps: {
			items: [
				{
					key: 'padding-v-title',
					name: 'Padding (vertical)',
					onClick: e => e && e.preventDefault(),
				},
				{
					key: 'padding-v-slider',
					onRender: item => (
						<Slider
							min={0}
							max={200}
							value={verticalPadding}
							onChange={value => update('verticalPadding', value)}
						/>
					),
				},
				{
					key: 'padding-h-title',
					name: 'Padding (horizontal)',
					onClick: e => e && e.preventDefault(),
				},
				{
					key: 'padding-h-slider',
					onRender: item => (
						<Slider
							min={0}
							max={200}
							value={horizontalPadding}
							onChange={value => update('horizontalPadding', value)}
						/>
					),
				},
				{
					key: 'shadown-enabled-title',
					name: 'Shadow Enabled',
					onClick: e => e && e.preventDefault(),
				},
				{
					key: 'shadow-enabled-toggle',
					onRender: item => (
						<Toggle
							value={shadowEnabled}
							onChange={value => update('shadowEnabled', value)}
						/>
					),
				},
				{
					key: 'shadown-offset-title',
					name: 'Shadow Offset',
					onClick: e => e && e.preventDefault(),
				},
				{
					key: 'shadow-offset-slider',
					onRender: item => (
						<Slider
							min={0}
							max={100}
							value={shadowOffset}
							onChange={value => update('shadowOffset', value)}
						/>
					),
				},
				{
					key: 'shadown-spread-title',
					name: 'Shadow Spread',
					onClick: e => e && e.preventDefault(),
				},
				{
					key: 'shadow-spread-slider',
					onRender: item => (
						<Slider
							min={0}
							max={100}
							value={shadowSpread}
							onChange={value => update('shadowSpread', value)}
						/>
					),
				},
			],
		},
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
	update: <K extends keyof MonacarbonConfig>(
		key: K,
		value: MonacarbonConfig[K],
	) => any;
}

export default class Toolbar extends React.Component<ToolbarProps> {
	render() {
		const { setTheme, update } = this.props;

		return (
			<AppContext.Consumer>
				{config => {
					const {
						editor: { theme },
						verticalPadding,
						horizontalPadding,
						shadowEnabled,
						shadowOffset,
						shadowSpread,
					} = config;

					return (
						<CommandBar
							items={closeItems({
								verticalPadding,
								horizontalPadding,
								theme,
								update,
								setTheme,
								shadowEnabled,
								shadowOffset,
								shadowSpread,
							})}
							farItems={farItems}
						/>
					);
				}}
			</AppContext.Consumer>
		);
	}
}
