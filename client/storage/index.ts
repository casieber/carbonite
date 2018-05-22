import { ApplicationState } from '../modules';

const STORAGE_KEY = 'carbonite-config';

/**
 * Loads the stored Config from local storage.
 */
export function loadConfig(): ApplicationState | null {
	if (!localStorage) {
		return null;
	}

	try {
		const value = localStorage.getItem(STORAGE_KEY);

		if (!value) {
			return null;
		}

		const parsed = JSON.parse(value);

		if (!parsed || typeof parsed !== 'object') {
			localStorage.removeItem(STORAGE_KEY);
			return null;
		}

		return parsed;
	} catch (e) {
		console.error(e);
		return null;
	}
}

/**
 * Saves a config to local storage
 *
 * @param config The config to save
 */
export function saveConfig(config: ApplicationState) {
	if (!localStorage) {
		return;
	}

	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
	} catch (e) {
		console.error(e);
		return;
	}
}
