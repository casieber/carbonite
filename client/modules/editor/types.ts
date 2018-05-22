export interface EditorState {
	/**
	 * The current active editor theme.
	 */
	theme: string;

	/**
	 * The current active editor language.
	 */
	language: string;

	/**
	 * The current text in the editor
	 */
	value: string;
}

export interface SetThemeAction {
	type: 'editor.setTheme';
	payload: string;
}

export interface SetLanguageAction {
	type: 'editor.setLanguage';
	payload: string;
}

export interface SetValueAction {
	type: 'editor.setValue';
	payload: string;
}

export type EditorAction = SetThemeAction | SetLanguageAction | SetValueAction;
