import * as monaco from 'monaco-editor';
import { RGBColor } from 'react-color';

export type EditorConfig = monaco.editor.IEditorConstructionOptions;

export type Color = RGBColor;

export type MonacarbonConfig = {
	/**
	 * Background color for the image.
	 */
	backgroundColor: string | Color;

	/**
	 * Configuration settings for the editor.
	 */
	editor: EditorConfig;

	/**
	 * Whether or not a drop shadow is enabled.
	 */
	shadowEnabled: boolean;

	/**
	 * Offset (px) for the drop shadow.
	 */
	shadowOffset: number;

	/**
	 * Spread value (px) for the drop shadow.
	 */
	shadowSpread: number;

	/**
	 * Padding between the editor and the image sides
	 */
	horizontalPadding: number;

	/**
	 * Padding between the editor and the image top/bottom.
	 */
	verticalPadding: number;
};
