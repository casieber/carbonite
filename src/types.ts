import { RGBColor } from 'react-color';

export type Color = RGBColor;

export type Config = {
	/**
	 * Background color for the image.
	 */
	backgroundColor: string | Color;

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

	/**
	 * The current active editor theme.
	 */
	theme: string;
};
