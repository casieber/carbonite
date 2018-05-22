import { initializeIcons } from '@uifabric/icons';
import { createStore, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer, { ApplicationState } from './modules';

/**
 * Performs any initial initialization that needs to happen for the app.
 */
export default function initializeApp() {
	Office.initialize = () => {};

	initializeIcons();

	const store = initializeStore();

	return { store };
}

/**
 * Generates the starting redux store.
 *
 * @returns The initial Store to use
 */
function initializeStore(): Store<ApplicationState> {
	return createStore(rootReducer, applyMiddleware(thunk));
}
