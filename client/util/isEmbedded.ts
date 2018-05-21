/**
 * Determines whether or not the app is embedded or standalone.
 *
 * @returns True if the app is embedded, false otherwise.
 */
export function isEmbedded(): boolean {
	return !!(Office && Office.context && Office.context.diagnostics);
}

/**
 * Determines whether or not the app is standalone or embedded.
 *
 * @returns True if the app is standalone, false otherwise.
 */
export function isStandalone(): boolean {
	return !isEmbedded();
}
