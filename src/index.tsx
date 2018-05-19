import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initializeIcons } from '@uifabric/icons';

import App from './components/App';

import { ROOT_NODE_ID } from './constants';

initializeIcons();

(self as any).MonacoEnvironment = {
	getWorkerUrl: function(_: any, label: string) {
		if (label === 'json') {
			return './json.worker.bundle.js';
		}
		if (label === 'css') {
			return './css.worker.bundle.js';
		}
		if (label === 'html') {
			return './html.worker.bundle.js';
		}
		if (label === 'typescript' || label === 'javascript') {
			return './ts.worker.bundle.js';
		}
		return './editor.worker.bundle.js';
	},
};

ReactDOM.render(<App />, document.getElementById(ROOT_NODE_ID));
