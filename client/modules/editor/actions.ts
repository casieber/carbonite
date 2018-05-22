import { SetLanguageAction, SetThemeAction, SetValueAction } from './types';

export function setLanguage(language: string): SetLanguageAction {
	return {
		type: 'editor.setLanguage',
		payload: language,
	};
}

export function setTheme(theme: string): SetThemeAction {
	return {
		type: 'editor.setTheme',
		payload: theme,
	};
}

export function setValue(value: string): SetValueAction {
	return {
		type: 'editor.setValue',
		payload: value,
	};
}
