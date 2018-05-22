import { toIdMap } from './util/toIdMap';

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
 * DOM node id for the background color node
 */
export const BACKGROUND_COLOR_ID = 'background-color';

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

/**
 * Supported languages
 */
export const languageList = [
	{
		id: 'Apache',
		mode: 'apache',
		mime: 'text/apache',
		custom: true,
	},
	{
		id: 'Bash',
		mode: 'shell',
		mime: 'application/x-sh',
	},
	{
		id: 'Plain Text',
		mode: 'text',
	},
	{
		id: 'C',
		mode: 'clike',
		mime: 'text/x-csrc',
		short: 'c',
	},
	{
		id: 'C++',
		mode: 'clike',
		mime: 'text/x-c++src',
		short: 'cpp',
	},
	{
		id: 'C#',
		mode: 'clike',
		mime: 'text/x-csharp',
		short: 'cs',
	},
	{
		id: 'Clojure',
		mode: 'clojure',
	},
	{
		id: 'Cobol',
		mode: 'cobol',
	},
	{
		id: 'CoffeeScript',
		mode: 'coffeescript',
	},
	{
		id: 'Crystal',
		mode: 'crystal',
	},
	{
		id: 'CSS',
		mode: 'css',
	},
	{
		id: 'D',
		mode: 'd',
	},
	{
		id: 'Dart',
		mode: 'dart',
	},
	{
		id: 'Diff',
		mode: 'diff',
		mime: 'text/x-diff',
	},
	{
		id: 'Django',
		mode: 'django',
	},
	{
		id: 'Docker',
		mode: 'dockerfile',
	},
	{
		id: 'Elixir',
		mode: 'elixir',
		custom: true,
	},
	{
		id: 'Elm',
		mode: 'elm',
	},
	{
		id: 'Erlang',
		mode: 'erlang',
	},
	{
		id: 'Fortran',
		mode: 'fortran',
	},
	{
		id: 'F# / OCaml',
		mode: 'mllike',
	},
	{
		id: 'GraphQL',
		mode: 'graphql',
		custom: true,
	},
	{
		id: 'Go',
		mode: 'go',
	},
	{
		id: 'Groovy',
		mode: 'groovy',
	},
	{
		id: 'Handlebars',
		mode: 'handlebars',
	},
	{
		id: 'Haskell',
		mode: 'haskell',
	},
	{
		id: 'Haxe',
		mode: 'haxe',
	},
	{
		id: 'HTML',
		mode: 'htmlmixed',
	},
	{
		id: 'Java',
		mode: 'clike',
		mime: 'text/x-java',
		short: 'java',
	},
	{
		id: 'JavaScript',
		mode: 'javascript',
		short: 'javascript',
	},
	{
		id: 'JSON',
		mode: 'javascript',
		mime: 'application/json',
		short: 'json',
	},
	{
		id: 'JSX',
		mode: 'jsx',
	},
	{
		id: 'Julia',
		mode: 'julia',
	},
	{
		id: 'Kotlin',
		mode: 'clike',
		mime: 'text/x-kotlin',
		short: 'kotlin',
	},
	{
		id: 'Lisp',
		mode: 'commonlisp',
	},
	{
		id: 'Lua',
		mode: 'lua',
	},
	{
		id: 'Markdown',
		mode: 'markdown',
	},
	{
		id: 'Mathematica',
		mode: 'mathematica',
	},
	{
		id: 'MySQL',
		mode: 'sql',
		mime: 'text/x-mysql',
		short: 'mysql',
	},
	{
		id: 'NGINX',
		mode: 'nginx',
	},
	{
		id: 'Nim',
		mode: 'nimrod',
		custom: true,
	},
	{
		id: 'Objective C',
		mode: 'clike',
		mime: 'text/x-objectivec',
		short: 'objectivec',
	},
	{
		id: 'Pascal',
		mode: 'pascal',
	},
	{
		id: 'Perl',
		mode: 'perl',
	},
	{
		id: 'PHP',
		mode: 'php',
		mime: 'text/x-php',
		short: 'php',
	},
	{
		id: 'PowerShell',
		mode: 'powershell',
	},
	{
		id: 'Python',
		mode: 'python',
	},
	{
		id: 'R',
		mode: 'r',
	},
	{
		id: 'Ruby',
		mode: 'ruby',
	},
	{
		id: 'Rust',
		mode: 'rust',
	},
	{
		id: 'Sass',
		mode: 'sass',
	},
	{
		id: 'Scala',
		mode: 'clike',
		mime: 'text/x-scala',
		short: 'scala',
	},
	{
		id: 'Smalltalk',
		mode: 'smalltalk',
	},
	{
		id: 'SQL',
		mode: 'sql',
	},
	{
		id: 'Stylus',
		mode: 'stylus',
		mime: 'stylus',
	},
	{
		id: 'Swift',
		mode: 'swift',
	},
	{
		id: 'TCL',
		mode: 'tcl',
	},
	{
		id: 'TypeScript',
		mode: 'javascript',
		mime: 'application/typescript',
		short: 'typescript',
	},
	{
		id: 'VB.NET',
		mode: 'vb',
	},
	{
		id: 'Verilog',
		mode: 'verilog',
	},
	{
		id: 'VHDL',
		mode: 'vhdl',
	},
	{
		id: 'Vue',
		mode: 'vue',
	},
	{
		id: 'XML',
		mode: 'xml',
	},
	{
		id: 'YAML',
		mode: 'yaml',
	},
];

export const languages = toIdMap(languageList);
