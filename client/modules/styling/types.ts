import { RGBColor } from 'react-color';

export type Color = string | RGBColor;

export interface StylingState {
	/**
	 * Image background state.
	 */
	background: BackgroundState;

	/**
	 * Drop shadow state.
	 */
	shadow: ShadowState;

	/**
	 * Padding state.
	 */
	padding: PaddingState;
}

export interface BackgroundState {
	/**
	 * Background color for the image.
	 */
	color: Color;
}

export interface ShadowState {
	/**
	 * Whether or not a drop shadow is enabled.
	 */
	enabled: boolean;

	/**
	 * Offset (px) for the drop shadow.
	 */
	offset: number;

	/**
	 * Spread value (px) for the drop shadow.
	 */
	spread: number;
}

export interface PaddingState {
	/**
	 * Padding between the editor and the image sides
	 */
	horizontal: number;

	/**
	 * Padding between the editor and the image top/bottom.
	 */
	vertical: number;
}

export interface UpdateBackgroundAction {
	type: 'styling.updateBackground';
	payload: Partial<BackgroundState>;
}

export interface UpdateShadowAction {
	type: 'styling.updateShadow';
	payload: Partial<ShadowState>;
}

export interface UpdatePaddingAction {
	type: 'styling.updatePadding';
	payload: Partial<PaddingState>;
}

export type StylingAction =
	| UpdateBackgroundAction
	| UpdateShadowAction
	| UpdatePaddingAction;
