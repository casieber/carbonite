import { toIdMap } from './util';

/**
 * DOM node id for the root node of the app.
 */
export const ROOT_NODE_ID = 'app';

/**
 * DOM node id for the node to capture when saving an image.
 */
export const CAPTURE_NODE_ID = 'capture-container';

/**
 * DOM node class name for nodes to filter out during capture.
 */
export const CAPTURE_HIDDEN_CLASSNAME = 'eliminateOnSave';

/**
 * Supported themes
 */
export const themeList = [
	{
		id: '3024-day',
		name: '3024 Day',
	},
	{
		id: '3024-night',
		name: '3024 Night',
	},
	{
		id: 'abcdef',
		name: 'abcdef',
	},
	{
		id: 'ambiance-mobile',
		name: 'Ambiance Mobile',
	},
	{
		id: 'ambiance',
		name: 'Ambiance',
	},
	{
		id: 'base16-dark',
		name: 'Base 16 Dark',
	},
	{
		id: 'base16-light',
		name: 'Base 16 Light',
	},
	{
		id: 'bespin',
		name: 'Bespin',
	},
	{
		id: 'blackboard',
		name: 'Blackboard',
	},
	{
		id: 'cobalt',
		name: 'Cobalt',
	},
	{
		id: 'colorforth',
		name: 'Colorforth',
	},
	{
		id: 'dracula',
		name: 'Dracula',
	},
	{
		id: 'duotone-dark',
		name: 'Duotone Dark',
	},
	{
		id: 'duotone-light',
		name: 'Duotone Light',
	},
	{
		id: 'eclipse',
		name: 'Eclipse',
	},
	{
		id: 'elegant',
		name: 'Elegant',
	},
	{
		id: 'erlang-dark',
		name: 'Erlang Dark',
	},
	{
		id: 'gruvbox-dark',
		name: 'Gruvbox Dark',
	},
	{
		id: 'hopscotch',
		name: 'Hopscotch',
	},
	{
		id: 'icecoder',
		name: 'Icecoder',
	},
	{
		id: 'idea',
		name: 'Idea',
	},
	{
		id: 'isotope',
		name: 'Isotope',
	},
	{
		id: 'lesser-dark',
		name: 'Lesser Dark',
	},
	{
		id: 'liquibyte',
		name: 'Liquibyte',
	},
	{
		id: 'lucario',
		name: 'Lucario',
	},
	{
		id: 'material',
		name: 'Material',
	},
	{
		id: 'mbo',
		name: 'MBO',
	},
	{
		id: 'mdn-like',
		name: 'MDN-like',
	},
	{
		id: 'midnight',
		name: 'Midnight',
	},
	{
		id: 'monokai',
		name: 'Monokai',
	},
	{
		id: 'neat',
		name: 'Neat',
	},
	{
		id: 'neo',
		name: 'Neo',
	},
	{
		id: 'night',
		name: 'Night',
	},
	{
		id: 'oceanic-next',
		name: 'Oceanic Next',
	},
	{
		id: 'panda-syntax',
		name: 'Panda',
	},
	{
		id: 'paraiso-dark',
		name: 'Paraiso Dark',
	},
	{
		id: 'paraiso-light',
		name: 'Paraiso Light',
	},
	{
		id: 'pastel-on-dark',
		name: 'Pastel on Dark',
	},
	{
		id: 'railscasts',
		name: 'Railscasts',
	},
	{
		id: 'rubyblue',
		name: 'Ruby Blue',
	},
	{
		id: 'seti',
		name: 'Seti',
	},
	{
		id: 'shadowfox',
		name: 'Shadowfox',
	},
	{
		id: 'solarized',
		name: 'Solarized',
	},
	{
		id: 'ssms',
		name: 'SSMS',
	},
	{
		id: 'the-matrix',
		name: 'The Matrix',
	},
	{
		id: 'tomorrow-night-bright',
		name: 'Tomorrow Night Bright',
	},
	{
		id: 'tomorrow-night-eighties',
		name: 'Tomorrow Night Eighties',
	},
	{
		id: 'ttcn',
		name: 'TTCN',
	},
	{
		id: 'twilight',
		name: 'Twilight',
	},
	{
		id: 'vibrant-ink',
		name: 'Vibrant Ink',
	},
	{
		id: 'xq-dark',
		name: 'XQ Dark',
	},
	{
		id: 'xq-light',
		name: 'XQ Light',
	},
	{
		id: 'yeti',
		name: 'Yeti',
	},
	{
		id: 'zenburn',
		name: 'Zenburn',
	},
];

export const themes = toIdMap(themeList);
