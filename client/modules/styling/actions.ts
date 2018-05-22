import {
	UpdateBackgroundAction,
	UpdatePaddingAction,
	UpdateShadowAction,
	BackgroundState,
	PaddingState,
	ShadowState,
} from './types';

export function updateBackground(
	background: Partial<BackgroundState>,
): UpdateBackgroundAction {
	return {
		type: 'styling.updateBackground',
		payload: background,
	};
}

export function updatePadding(
	padding: Partial<PaddingState>,
): UpdatePaddingAction {
	return {
		type: 'styling.updatePadding',
		payload: padding,
	};
}

export function updateShadow(shadow: Partial<ShadowState>): UpdateShadowAction {
	return {
		type: 'styling.updateShadow',
		payload: shadow,
	};
}
