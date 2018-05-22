export interface ImageState {
	/**
	 * Processing status of image interaction.
	 * True if processing is ongoing, false otherwise.
	 */
	processing: boolean;
}

export interface SaveImageAction {
	type: 'image.save';
}

export interface EmbedImageAction {
	type: 'image.embed';
}

export type ImageAction = SaveImageAction | EmbedImageAction;
