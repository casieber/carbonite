import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initializeIcons } from '@uifabric/icons';
import 'core-js';
import 'isomorphic-fetch';

import App from './components/App';

import { ROOT_NODE_ID } from './constants';

Office.initialize = () => {};

initializeIcons();

ReactDOM.render(<App />, document.getElementById(ROOT_NODE_ID));
