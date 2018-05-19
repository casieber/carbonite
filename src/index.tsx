import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initializeIcons } from '@uifabric/icons';

import App from './components/App';

import { ROOT_NODE_ID } from './constants';

initializeIcons();

ReactDOM.render(<App />, document.getElementById(ROOT_NODE_ID));
