import * as React from 'react';
import {
	CommandBar,
	IContextualMenuItem,
	CommandButton,
} from 'office-ui-fabric-react';

import { themeList, languageList } from '../constants';
import AppContext from '../context';

import Slider from './Slider';
import Toggle from './Toggle';
import BackgroundPicker from './BackgroundPicker';
import { Config } from '../types';

import { saveImage } from '../actions';

/**
 * Left side menu bar items
 */
const closeItems = ({
	theme,
	language,
	horizontalPadding,
	verticalPadding,
	update,
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
			items: themeList.map(({ id, name }) => ({
				key: id,
				name,
				checked: id === theme,
				canCheck: true,
				onClick: () => update('theme', id),
			})),
		},
	},
	{
		key: 'language',
		name: 'Language',
		onRender: item => {
			return (
				<CommandButton menuProps={{ items: item.subMenuProps.items }}>
					{item.name}
				</CommandButton>
			);
		},
		subMenuProps: {
			items: languageList.map(({ id }) => ({
				key: id,
				name: id,
				checked: id === language,
				canCheck: true,
				onClick: () => update('language', id),
			})),
		},
	},
	{
		key: 'bg',
		name: 'Background',
		onRender: () => (
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
					onRender: () => (
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
					onRender: () => (
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
					onRender: () => (
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
					onRender: () => (
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
					onRender: () => (
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
			<CommandButton iconProps={{ iconName: 'Picture' }} onClick={saveImage}>
				{item.name}
			</CommandButton>
		),
	},
];

interface ToolbarProps {
	update: <K extends keyof Config>(key: K, value: Config[K]) => any;
}

export default class Toolbar extends React.Component<ToolbarProps> {
	render() {
		const { update } = this.props;

		return (
			<AppContext.Consumer>
				{config => {
					const {
						verticalPadding,
						horizontalPadding,
						shadowEnabled,
						shadowOffset,
						shadowSpread,
						theme,
						language,
					} = config;

					return (
						<CommandBar
							items={closeItems({
								verticalPadding,
								horizontalPadding,
								theme,
								update,
								shadowEnabled,
								shadowOffset,
								shadowSpread,
								language,
							})}
							farItems={farItems}
						/>
					);
				}}
			</AppContext.Consumer>
		);
	}
}
