import * as React from 'react';
import { connect } from 'react-redux';
import {
	CommandBar,
	IContextualMenuItem,
	CommandButton,
} from 'office-ui-fabric-react';

import { themeList, languageList } from '../constants';

import Slider from './Slider';
import Toggle from './Toggle';
import BackgroundPicker from './BackgroundPicker';

import { isEmbedded } from '../util/isEmbedded';
import { ApplicationState } from '../modules';
import { reset } from '../modules/actions';
import {
	PaddingState,
	ShadowState,
	updatePadding,
	updateShadow,
} from '../modules/styling';
import { EditorState, setTheme, setLanguage } from '../modules/editor';
import { saveImage, insertImage } from '../modules/image';

/**
 * Left side menu bar items
 */
const closeItems = ({
	editor: { theme, language },
	padding,
	shadow,
	setTheme,
	setLanguage,
	updatePadding,
	updateShadow,
}: ToolbarProps): IContextualMenuItem[] => [
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
				onClick: () => setTheme(id),
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
				onClick: () => {
					setLanguage(id);
				},
			})),
		},
	},
	{
		key: 'bg',
		name: 'Background',
		onRender: () => <BackgroundPicker />,
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
							value={padding.vertical}
							onChange={vertical => updatePadding({ ...padding, vertical })}
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
							value={padding.horizontal}
							onChange={horizontal => updatePadding({ ...padding, horizontal })}
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
							value={shadow.enabled}
							onChange={enabled => updateShadow({ ...shadow, enabled })}
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
							value={shadow.offset}
							onChange={offset => updateShadow({ ...shadow, offset })}
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
							value={shadow.spread}
							onChange={spread => updateShadow({ ...shadow, spread })}
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
const farItems = ({
	reset,
	insertImage,
	saveImage,
}: ToolbarProps): IContextualMenuItem[] => [
	{
		key: 'reset',
		name: 'Reset',
		onRender: item => (
			<CommandButton onClick={reset}>{item.name}</CommandButton>
		),
	},
	{
		key: 'save-png',
		name: 'Save PNG',
		onRender: item => (
			<CommandButton
				iconProps={{ iconName: 'Picture' }}
				onClick={() => (isEmbedded() ? insertImage() : saveImage())}
			>
				{item.name}
			</CommandButton>
		),
	},
];

interface ToolbarProps {
	padding: PaddingState;
	shadow: ShadowState;
	editor: EditorState;

	reset: typeof reset;
	setTheme: typeof setTheme;
	setLanguage: typeof setLanguage;
	updatePadding: typeof updatePadding;
	updateShadow: typeof updateShadow;
	saveImage: () => any;
	insertImage: () => any;
}

const Toolbar = (props: ToolbarProps) => (
	<CommandBar items={closeItems(props)} farItems={farItems(props)} />
);

const mapStateToProps = (state: ApplicationState) => ({
	padding: state.styling.padding,
	shadow: state.styling.shadow,
	editor: state.editor,
});

const mapDispatchToProps = {
	reset,
	setTheme,
	setLanguage,
	updatePadding,
	updateShadow,
	saveImage,
	insertImage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
