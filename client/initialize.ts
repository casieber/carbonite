import { initializeIcons } from '@uifabric/icons';

import { Config } from './types';
import { defaultConfig } from './constants';
import { loadConfig } from './storage';
import { configFromQuery } from './util/configFromQuery';

/**
 * Generates the starting config object.
 *
 * @returns The initial Config to use
 */
export function initializeConfig(): Config {
	/**
	 * Config settings come from three possible
	 * places:
	 * 		1. Query parameters
	 * 		2. Saved LocalStorage settings
	 * 		3. Static config defaults
	 */
	return {
		...defaultConfig,
		...(loadConfig() || {}),
		...(configFromQuery() || {}),
	};
}

/**
 * Performs any initial initialization that needs to happen for the app.
 */
export function initializeApp() {
	Office.initialize = () => {};

	initializeIcons();
}
