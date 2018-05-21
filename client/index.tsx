import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'core-js';
import 'isomorphic-fetch';

import { initializeApp, initializeConfig } from './initialize';
import App from './components/App';

import { ROOT_NODE_ID } from './constants';

initializeApp();
const config = initializeConfig();

ReactDOM.render(
	<App defaultConfig={config} />,
	document.getElementById(ROOT_NODE_ID),
);
