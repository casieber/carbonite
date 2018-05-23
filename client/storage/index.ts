import { ApplicationState } from '../modules';

const STORAGE_KEY = 'carbonite-state';

/**
 * Loads the stored state from local storage.
 *
 * @returns The cached application state if any exists, otherwise undefined.
 */
export function loadState(): ApplicationState | undefined {
	try {
		if (!localStorage) {
			return undefined;
		}

		const value = localStorage.getItem(STORAGE_KEY);

		if (!value) {
			return undefined;
		}

		const parsed = JSON.parse(value);

		if (!parsed || typeof parsed !== 'object') {
			localStorage.removeItem(STORAGE_KEY);
			return undefined;
		}

		return parsed;
	} catch (e) {
		console.error(e);
		return undefined;
	}
}

/**
 * Saves a config to local storage
 *
 * @param state The config to save
 */
export function saveState(state: ApplicationState) {
	try {
		if (!localStorage) {
			return;
		}

		localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
	} catch (e) {
		console.error(e);
		return;
	}
}
