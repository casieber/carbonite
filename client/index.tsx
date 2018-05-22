import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'core-js';
import 'isomorphic-fetch';
import { Provider } from 'react-redux';

import initialize from './initialize';
import App from './components/App';

import { ROOT_NODE_ID } from './constants';

const { store } = initialize();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById(ROOT_NODE_ID),
);
