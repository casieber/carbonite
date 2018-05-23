import { initializeIcons } from '@uifabric/icons';
import { createStore, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer, { ApplicationState } from './modules';
import { loadState, saveState } from './storage';

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
	// Try to load cached state
	const persistedState = loadState();

	const enhancer = applyMiddleware(thunk);

	const store = persistedState
		? createStore(rootReducer, persistedState, enhancer)
		: createStore(rootReducer, enhancer);

	// Subscribe to store for state persistence
	store.subscribe(() => {
		saveState(store.getState());
	});

	// Hook up state replacement mechanism for puppeteer API calls
	(window as any).replaceState = (state: ApplicationState) =>
		store.dispatch({
			type: 'app.replace',
			payload: state,
		});

	return store;
}
